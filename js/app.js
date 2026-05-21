

const games = [
  {
    title: 'Aventura Épica',
    price: 49.99,
    tags: ['Acción', 'Aventura', '1-4 jugadores'],
    image: 'img/1065153_front.jpg',
    favorite: false
  },
  {
    title: 'Carreras Pro',
    price: 39.99,
    tags: ['Carreras', 'Multijugador'],
    image: 'img/Forza.webp',
    favorite: false
  },
  {
    title: 'Estrategia Total',
    price: 29.99,
    tags: ['Estrategia', '1 jugador'],
    image: 'img/screenshot-1041.avif',
    favorite: false
  }
];

const grid = document.querySelector('.grid');
const filterSelect = document.querySelector('#filter-select');
const searchInput = document.querySelector('#search-input');
const favoritesToggle = document.querySelector('#favorites-toggle');
const statusMessage = document.querySelector('#selected-game-info');
const favoritesCount = document.querySelector('#favorites-count');
const form = document.querySelector('#newsletter-form');
const emailInput = document.querySelector('#email');
const navLinks = document.querySelectorAll('nav a');

let selectedGame = null;
let purchaseCount = 0;

function createGameCard(game) {
  const card = document.createElement('article');
  card.className = 'card game';

  const img = document.createElement('img');
  img.src = game.image;
  img.alt = `Portada ${game.title}`;

  const title = document.createElement('h3');
  title.textContent = game.title;

  const details = document.createElement('p');
  details.className = 'muted';
  details.textContent = game.tags.join(' • ');

  const price = document.createElement('p');
  price.className = 'price';
  price.textContent = `€${game.price.toFixed(2)}`;

  const button = document.createElement('button');
  button.className = 'btn btn-primary';
  button.type = 'button';
  button.textContent = 'Comprar';
  button.addEventListener('click', () => {
    selectedGame = game;
    purchaseCount += 1;
    showSelectedGame(game);
  });

  const favoriteButton = document.createElement('button');
  favoriteButton.className = 'btn btn-secondary';
  favoriteButton.type = 'button';
  updateFavoriteButton(favoriteButton, game);
  favoriteButton.addEventListener('click', () => {
    toggleFavorite(game);
    updateFavoriteButton(favoriteButton, game);
    renderCatalog(filterSelect?.value || 'all', searchInput?.value || '', favoritesToggle?.checked);
    updateStatusMessage(game.favorite
      ? `"${game.title}" agregado a favoritos.`
      : `"${game.title}" eliminado de favoritos.`);
  });

  const actions = document.createElement('div');
  actions.className = 'card-actions';
  actions.append(button, favoriteButton);

  card.append(img, title, details, price, actions);
  return card;
}

const updateStatusMessage = message => {
  if (statusMessage) {
    statusMessage.textContent = message;
  }
};

function showSelectedGame(game) {
  const message = purchaseCount === 1
    ? `Has seleccionado "${game.title}". Esta es tu primera compra simulada.`
    : `Has seleccionado "${game.title}". Compras simuladas: ${purchaseCount}`;
  updateStatusMessage(message);
}

const getFilteredGames = genre => {
  if (genre === 'all') {
    return games;
  }
  return games.filter(game => game.tags.includes(genre));
};

const filterBySearch = (gamesList, term) => {
  if (!term) {
    return gamesList;
  }

  const normalizedTerm = term.toLowerCase().trim();
  return gamesList.filter(game => game.title.toLowerCase().includes(normalizedTerm));
};

const getVisibleGames = (filter = 'all', searchTerm = '', favoritesOnly = false) => {
  let visibleGames = getFilteredGames(filter);
  visibleGames = filterBySearch(visibleGames, searchTerm);

  if (favoritesOnly) {
    visibleGames = visibleGames.filter(game => game.favorite);
  }

  return visibleGames;
};

function renderCatalog(filter = 'all', searchTerm = '', favoritesOnly = false) {
  if (!grid) return;

  const visibleGames = getVisibleGames(filter, searchTerm, favoritesOnly);
  grid.innerHTML = '';

  if (visibleGames.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = 'No hay juegos disponibles para ese filtro o búsqueda.';
    grid.appendChild(empty);
    return;
  }

  visibleGames.forEach(game => {
    const card = createGameCard(game);
    grid.appendChild(card);
  });
}

function getGenres() {
  const genres = new Set();

  games.forEach(game => {
    game.tags.forEach(tag => genres.add(tag));
  });

  return ['all', ...Array.from(genres).sort()];
}

function populateFilterOptions() {
  if (!filterSelect) return;

  filterSelect.innerHTML = '';
  getGenres().forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre === 'all' ? 'Todos' : genre;
    filterSelect.appendChild(option);
  });
}

function updateFavoriteButton(button, game) {
  if (!button) return;

  button.textContent = game.favorite ? '❤ Favorito' : 'Agregar a favoritos';
  button.className = game.favorite ? 'btn btn-secondary active' : 'btn btn-secondary';
}

function toggleFavorite(game) {
  game.favorite = !game.favorite;
  updateFavoriteCount();
}

function updateFavoriteCount() {
  if (favoritesCount) {
    const count = games.filter(game => game.favorite).length;
    favoritesCount.textContent = `Favoritos: ${count}`;
  }
}

function handleFavoritesToggle() {
  const selectedGenre = filterSelect?.value || 'all';
  const searchTerm = searchInput?.value || '';
  const onlyFavorites = favoritesToggle?.checked || false;

  renderCatalog(selectedGenre, searchTerm, onlyFavorites);
  updateStatusMessage(onlyFavorites ? 'Mostrando solo favoritos' : 'Mostrando todos los juegos');
}

function updateNavigation() {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

function handleFormSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (email === '') {
    alert('Por favor ingresa un correo válido.');
    return;
  }

  if (!email.includes('@')) {
    alert('El correo debe incluir un símbolo @.');
    return;
  }

  alert(`Gracias por suscribirte con ${email}!`);
  form.reset();
}

function handleFilterChange() {
  const selectedGenre = filterSelect?.value || 'all';
  const searchTerm = searchInput?.value || '';
  const onlyFavorites = favoritesToggle?.checked || false;

  renderCatalog(selectedGenre, searchTerm, onlyFavorites);
  updateStatusMessage(`Mostrando juegos para: ${selectedGenre === 'all' ? 'Todos' : selectedGenre}`);
}

function handleSearchInput() {
  const selectedGenre = filterSelect?.value || 'all';
  const searchTerm = searchInput?.value || '';
  const onlyFavorites = favoritesToggle?.checked || false;

  renderCatalog(selectedGenre, searchTerm, onlyFavorites);
  updateStatusMessage(searchTerm
    ? `Buscando: "${searchTerm}"` 
    : `Mostrando juegos para: ${selectedGenre === 'all' ? 'Todos' : selectedGenre}`);
}

function init() {
  populateFilterOptions();
  updateFavoriteCount();
  renderCatalog();
  updateNavigation();
  navLinks[0]?.classList.add('active');
  form.addEventListener('submit', handleFormSubmit);
  filterSelect?.addEventListener('change', handleFilterChange);
  searchInput?.addEventListener('input', handleSearchInput);
  favoritesToggle?.addEventListener('change', handleFavoritesToggle);
}

window.addEventListener('DOMContentLoaded', init);

let i = 0;
while (i < navLinks.length) {
  console.log(`Enlace de navegación ${i + 1}: ${navLinks[i].textContent}`);
  i += 1;
}

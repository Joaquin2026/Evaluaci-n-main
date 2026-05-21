const games = [
  {
    title: 'Aventura Épica',
    price: 49.99,
    tags: 'Acción • Aventura • 1-4 jugadores',
    image: 'img/1065153_front.jpg'
  },
  {
    title: 'Carreras Pro',
    price: 39.99,
    tags: 'Carreras • Multijugador',
    image: 'img/Forza.webp'
  },
  {
    title: 'Estrategia Total',
    price: 29.99,
    tags: 'Estrategia • 1 jugador',
    image: 'img/screenshot-1041.avif'
  }
];

const grid = document.querySelector('.grid');
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
  img.width = 220;

  const title = document.createElement('h3');
  title.textContent = game.title;

  const details = document.createElement('p');
  details.className = 'muted';
  details.textContent = game.tags;

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

    if (purchaseCount === 1) {
      alert(`Has seleccionado "${game.title}". Esta es tu primera compra simulada.`);
    } else {
      alert(`Has seleccionado "${game.title}". Compras simuladas: ${purchaseCount}`);
    }
  });

  card.append(img, title, details, price, button);
  return card;
}

function renderCatalog() {
  grid.innerHTML = '';
  games.forEach(game => {
    const card = createGameCard(game);
    grid.appendChild(card);
  });
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

renderCatalog();
updateNavigation();
form.addEventListener('submit', handleFormSubmit);

let i = 0;
while (i < navLinks.length) {
  console.log(`Enlace de navegación ${i + 1}: ${navLinks[i].textContent}`);
  i += 1;
}

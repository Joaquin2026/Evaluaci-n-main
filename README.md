# Tienda de videojuegos

Descripción
- Proyecto sobre una interfaz simple para una tienda de videojuegos. Con un enfoque semántico en HTML5 y uso de Flexbox para el layout.

Estructura de carpetas
- / (proyecto)
  - index.html
  - README.md
  - /css
    - estilos.css
  - /img
    - logo.webp
    - 1065153_front.jpg
    - Forza.webp
    - screenshot-1041.avif
  - /js
    - app.js

Prompts usados para crear el HTML y CSS

 EL index.html
1. Genera un documento HTML5 semántico para un sitio web de una Tienda de videojuegos. Debe incluir: un header con logo, un nav con 3 links, un main con una sección de bienvenida y otra con información de contacto, y un footer. Usa solo etiquetas semánticas de HTML5.

- Lo use para crear la base del sitio que contenia el header, nav, main y footer. 

2. Tratemos de agregarle mas informacion a la pagina principal.

- lo use para que la base de la estructura no se viera tan vacia y complementarle con algo mas de información y coherencia.

 El estilos.css
1. Crea estilos profesionales para este sitio. Usa Flexbox para centrar el contenido y para que el menú de navegación sea horizontal. Asegúrate de que el diseño sea ordenado, con una paleta de colores coherente y que el formulario tenga un estilo moderno. Usa CSS externo.

- Lo use para la cracion de paleta de colores y ocupando estilos CSS, ademas de como quedaria visualmente ocupando flexbox para un menú horizontal.

 La creacion de js
1. Se necesita implementar de una forma adecuada a la estructura del codigo las variables y sintaxis como los let y const, ademas de las estructuras de control como los if y los ciclos(los for, forEach, while u otros) siempre y cuando no afecte al resto del codigo y no entre en conflicto con otra parte.

- se crearon los "const" los que se usan para valores que no se reasignan y "games" contiene el catálogo de juegos. Ademas que "grid", "form", "emailInput" y "navLinks" son referencias al DOM.

Estructuras de control
- "if" se utiliza en dos lugares principales:
 - En el controlador del botón de compra, para mostrar mensajes distintos en la primera compra simulada y en compras posteriores.
 - En "handleFormSubmit", para validar que el correo no esté vacío y que contenga "@" antes de enviar la suscripción.
- Ciclos usados:
  - "games.forEach()" en "renderCatalog" para crear y mostrar una tarjeta por cada juego.
  - "navLinks.forEach()" en "updateNavigation" para activar el estilo del enlace clicado y removerlo de los demás.
  - "while (i < navLinks.length)" para recorrer los enlaces de navegación y registrar su texto en la consola.

arr
Se necesita el poder inlcluir de forma adecuada a la estructura de esta pagina web y debemos hacer 1 o los arreglos necesarios, pasamos a hacer tambien 1 o mas los que se necesiten a los objetos"
- Indica que la estructura del sitio debe mantenerse clara y que los objetos JavaScript usados para el contenido (como el arreglo `games`) pueden modificarse según sea necesario.
- En `js/app.js`, el objeto principal es el arreglo `games`, donde cada elemento representa un juego con propiedades `title`, `price`, `tags` e `image`.
- Si se necesitan cambios en la tienda, hay que ajustar `games` y el modelo de tarjeta dentro de `createGameCard`.

Prompts usados para agregar funciones propias, funciones arrow, querySelector y addEventListener

1. "Ahora se va a necesitar que se ocupen funciones como las funciones propias y alguna que otra funcion arrow minimo una, tambien debemos tener una buena manipulacion del DOM para esto debemos ocupar un querySelector, addEventListener, y alguna modificación del HTML"
- Se implementaron funciones propias como `createGameCard()`, `renderCatalog()`, `handleFilterChange()` y `handleSearchInput()`.
- Se incorporaron funciones arrow como `const updateStatusMessage = message => ...` y `const getFilteredGames = genre => ...`.
- Se usó `querySelector` para obtener referencias de elementos del DOM: `.grid`, `#filter-select`, `#search-input`, `#selected-game-info`, `#newsletter-form`, `#email`, `nav a`.
- Se aplicó `addEventListener` en botones de compra, selector de filtro, input de búsqueda y formulario de suscripción.
- Se modificó el HTML agregando `<select>` para filtro por género y `<input type="search">` para búsqueda.

2. "Si se puede agregalo siempre y cuando no afecte en nada a todo a lo agregado y no entre en conflicto con cualquier otra parte del proyecto"
- Se añadió un campo de búsqueda sin afectar el filtro existente.
- Se implementó `const filterBySearch = (gamesList, term) => ...` para filtrar por título de juego.
- Se actualizó `renderCatalog()` para aceptar parámetros de filtro y búsqueda.
- Se añadió un nuevo manejador `handleSearchInput()` para escuchar cambios en tiempo real.

Prompts usados para agregar sistema de favoritos y filtro dinámico

1. "Ahora se necesita agregar ciertas funcionalidades como un sistema de favoritos, un sistema de busqueda o un filtro dinamico, ademas de un render dinamico utilizando el javaScript"
- Se implementó un sistema de favoritos con:
  - Propiedad `favorite: false` agregada a cada objeto en el arreglo `games`.
  - Botón "Agregar a favoritos" / "❤ Favorito" en cada tarjeta de juego.
  - Función `toggleFavorite(game)` para cambiar estado de favorito.
  - Función `updateFavoriteCount()` para mostrar contador en vivo.
  - Función `handleFavoritesToggle()` para filtrar solo favoritos.

- Se implementó filtro dinámico generado desde los datos:
  - Función `getGenres()` que extrae géneros únicos de los tags de los juegos.
  - Función `populateFilterOptions()` que renderiza dinámicamente las opciones del `<select>`.
  - Función `getVisibleGames()` que combina filtro, búsqueda y favoritos.

- Se mejoró el render dinámico:
  - `createGameCard()` ahora genera tarjetas con dos botones (Comprar y Favorito).
  - Todas las tarjetas se crean desde JavaScript, no hay HTML estático.
  - El catálogo se reconstruye dinámicamente cuando cambian filtro, búsqueda o favoritos.

---

## Validaciones y Correcciones Realizadas

### 1. Validación de Estructura HTML
- ✅ Se verificó que todos los elementos HTML tengan atributos semánticos correctos.
- ✅ Se confirmó que los `id` y `aria-label` sean únicos y descriptivos.
- ✅ Se validó que el formulario de suscripción incluya atributos `required` y tipos de input correctos.
- ✅ Se aseguró que todas las imágenes tengan `alt` descriptivo.

### 2. Validación de JavaScript
- ✅ Se corrigió el uso de `querySelector` para asegurar que no haya conflictos de selectores.
- ✅ Se validó que todos los `addEventListener` estén siendo agregados a elementos que existen en el DOM.
- ✅ Se verificó que las funciones arrow estén correctamente sintaxizadas sin errores de scope.
- ✅ Se confirmó que `renderCatalog()` maneja correctamente los casos vacíos (sin resultados).
- ✅ Se validó que el arreglo `games` tenga la estructura correcta con todas las propiedades necesarias.

### 3. Compatibilidad y Conflictos
- ✅ Filtro dinámico: Los géneros se generan desde los datos, evitando opciones hardcodeadas.
- ✅ Sistema de búsqueda: Funciona en conjunto con filtro sin conflictos.
- ✅ Sistema de favoritos: Se integra sin romper el contador de compras.
- ✅ Se verificó que el manejador `handleFavoritesToggle()` actualice correctamente el render.
- ✅ Se confirmó que `updateFavoriteCount()` se ejecuta cada vez que cambia un favorito.

### 4. Correcciones de Flujo de Datos
- ✅ Se corrigió `renderCatalog()` para usar `visibleGames` en lugar de `filteredGames` al renderizar.
- ✅ Se ajustó la lógica en `createGameCard()` para que el botón de favorito se actualice visualmente.
- ✅ Se verificó que los manejadores de eventos (`handleFilterChange`, `handleSearchInput`, `handleFavoritesToggle`) pasen los parámetros correctos a `renderCatalog()`.

### 5. Estilos CSS
- ✅ Se agregaron estilos para `.card-actions` para que los botones de compra y favorito se muestren lado a lado.
- ✅ Se creó `.btn-secondary` para diferenciar el botón de favorito del botón de compra.
- ✅ Se añadió `.btn-secondary.active` para mostrar visualmente cuando un juego está en favoritos.
- ✅ Se validó que `flex-wrap` en `.catalog-actions` permita respuesta móvil.
- ✅ Se confirmó que los colores y gradientes sean coherentes con la paleta general.

### 6. Accesibilidad
- ✅ Se agregó `aria-live="polite"` al elemento de estado de juego seleccionado.
- ✅ Se confirmó que todos los botones tienen `type` correcto.
- ✅ Se validó que el checkbox de favoritos sea accesible con teclado.

### 7. Funcionalidad End-to-End
- ✅ Búsqueda: escribe en el input y las tarjetas se filtran en tiempo real.
- ✅ Filtro: selecciona un género y solo aparecen juegos con ese tag.
- ✅ Favoritos: clickea el botón y se marca/desmarca, el contador se actualiza.
- ✅ Solo favoritos: activa el checkbox y solo aparecen los favoritos marcados.
- ✅ Compra: clickea "Comprar" y muestra el contador de compras simuladas.
- ✅ Combinación: filtro + búsqueda + favoritos funcionan simultáneamente sin conflicto.


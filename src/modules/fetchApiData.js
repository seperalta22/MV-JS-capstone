import popUp from './popUp.js';

const fetchApiData = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await res.json();
  const pokemonArray = data.results;

  const mainSection = document.getElementById('main-section');

  await Promise.all(
    pokemonArray.map(async (pokemon) => {
      const pokemonRes = await fetch(pokemon.url);
      const pokemonData = await pokemonRes.json();

      const card = document.createElement('div');
      card.classList.add('card');
      card.id = `${pokemonData.id}`;

      card.innerHTML = `
      <img
        class="card-image"
        src="${pokemonData.sprites.front_default}"
        alt="${pokemonData.name}"
      />
      <h2 class="card-name">${pokemonData.name}</h2>
      <button class="likes-btn"><i class="fas fa-heart"></i></button>
      <span class="likes-counter" >5 likes</span>
      <button id=${pokemonData.id} class="btn">Comments</button>
    `;

      mainSection.appendChild(card);

      const commentsButton = document.querySelectorAll('.btn');
      const modal = document.querySelector('.comments');
      commentsButton.forEach((button) => {
        if (button.id === pokemonData.id.toString()) {
          button.addEventListener('click', () => {
            popUp(pokemonData.id);
            modal.style.display = 'block';
          });
        }
      });
    }),
  );
};

export default fetchApiData;

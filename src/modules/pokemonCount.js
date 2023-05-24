const pokemonsCount = () => {
  const countElement = document.getElementById('pokemon-count');
  const cardCount = document.querySelectorAll('.card').length;
  countElement.innerText = `${cardCount} Pokemons`;
};

export default pokemonsCount;

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/edecTBZJTxSFvT9kueVx/likes/';

const getPokemons = async () => {
  const response = await fetch(`${pokemonUrl}?limit=10`);
  const data = await response.json();
  return data;
};

const getPokemon = async (id) => {
  const response = await fetch(`${pokemonUrl}${id}`);
  const data = await response.json();
  return data;
};

// likes

const getLikes = async () => {
  const response = await fetch(`${involvementUrl}likes/`);
  const data = await response.json();
  return data;
};

const getLike = async (id) => {
  const response = await fetch(`${involvementUrl}likes/?item_id=${id}`);
  const data = await response.json();
  return data;
};

const postLike = async (id) => {
  const response = await fetch(`${involvementUrl}likes/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return response;
};

// comments

const getComments = async () => {
  const response = await fetch(`${involvementUrl}comments/`);
  const data = await response.json();
  return data;
};

const getComment = async (id) => {
  const response = await fetch(`${involvementUrl}comments/?item_id=${id}`);
  const data = await response.json();
  return data;
};

const postComment = async (id, user, comment) => {
  const response = await fetch(`${involvementUrl}comment/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment,
    }),
  });
  return response;
};

export {
  getPokemons,
  getPokemon,
  getLikes,
  getLike,
  postLike,
  getComments,
  getComment,
  postComment,
};

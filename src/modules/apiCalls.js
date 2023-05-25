import commentsCounter from './commentsCounter.js';

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/edecTBZJTxSFvT9kueVx/';

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

const getComments = async (index) => {
  const response = await fetch(
    `${involvementUrl}comments?item_id=item${index}`,
  );
  const arr = await response.json();
  const div = document.getElementById('con-comments');
  div.innerHTML = '';
  arr.forEach((element) => {
    const comment = document.createElement('p');
    comment.className = 'user-comment';
    comment.innerText = `${element.creation_date}  ${element.username}: ${element.comment}`;
    div.appendChild(comment);
  });
  const count = document.querySelectorAll('.user-comment');
  commentsCounter(count.length);
};

const postComment = async (id, name, comment) => {
  await fetch(`${involvementUrl}comments/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `item${id}`,
      username: name,
      comment,
    }),
  });
  await getComments(id);
};

export {
  getPokemons,
  getPokemon,
  getLikes,
  getLike,
  postLike,
  getComments,
  postComment,
};

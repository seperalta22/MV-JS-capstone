const popUp = async (id) => {
  const commentsSection = document.querySelector('.comments');

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  const modal = document.createElement('section');
  modal.classList.add('comment-container');
  commentsSection.appendChild(modal);

  const img = document.createElement('img');
  img.classList.add('comment-img');
  img.src = data.sprites.front_default;
  img.alt = data.name;
  modal.appendChild(img);
};

export default popUp;

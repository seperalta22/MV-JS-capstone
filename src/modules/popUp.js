import { getComments, getPokemon, postComment } from './apiCalls.js';

const popUp = async (id) => {
  const commentsSection = document.querySelector('.comments');

  const data = await getPokemon(id);

  const modal = document.createElement('section');
  modal.classList.add('comment-container');
  commentsSection.appendChild(modal);

  const img = document.createElement('img');
  img.classList.add('comment-img');
  img.src = data.sprites.front_default;
  img.alt = data.name;
  modal.appendChild(img);

  const x = document.createElement('span');
  x.classList.add('x');
  x.id = 'close';
  x.innerHTML = '&times;';
  modal.appendChild(x);

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  modal.appendChild(textContainer);

  const name = document.createElement('h2');
  name.classList.add('comment-title');
  name.textContent = data.name;
  textContainer.appendChild(name);

  const properties = document.createElement('ul');
  properties.classList.add('properties');
  properties.innerHTML = `
    <div>
    <li><span>Order:</span> #${data.order}</li>
    <li><span>Base Experience:</span> ${data.base_experience}</li>
    </div>
    <div>
    <li><span>Weight:</span> ${data.weight} lbs</li>
    <li><span>Height:</span> ${data.height} ft</li>
    </div>
  `;
  textContainer.appendChild(properties);

  const comContainer = document.createElement('div');
  comContainer.classList.add('comment-display');
  textContainer.appendChild(comContainer);

  const commentTitle = document.createElement('h3');
  commentTitle.classList.add('com-title');
  commentTitle.id = 'comments-counter';
  commentTitle.textContent = 'Comments (0)';
  comContainer.appendChild(commentTitle);

  const contComments = document.createElement('div');
  contComments.id = 'con-comments';
  comContainer.appendChild(contComments);

  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  textContainer.appendChild(formContainer);

  const formTitle = document.createElement('h4');
  formTitle.classList.add('form-title');
  formTitle.textContent = 'Add a comment';
  formContainer.appendChild(formTitle);

  const form = document.createElement('form');
  form.classList.add('comment-form');
  form.innerHTML = `
  <input type="text" name="name" id="nameF" placeholder="Your name" maxlength="30" required/>
  <textarea name="comment" id="commentF" type="text" placeholder="Your insights" cols="30" rows="5" maxlength="250"></textarea>
  <button id="submit" type="submit" required>Comment</button>
  `;
  formContainer.appendChild(form);

  x.addEventListener('click', () => {
    commentsSection.style.display = 'none';
    commentsSection.removeChild(modal);
  });

  const submit = document.getElementById('submit');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('nameF').value;
    const comment = document.getElementById('commentF').value;
    postComment(id, name, comment);
    // clear form
    document.getElementById('nameF').value = '';
    document.getElementById('commentF').value = '';
  });
  await getComments(id);
};

export default popUp;

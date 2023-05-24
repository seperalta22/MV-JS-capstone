import fetchApiData from './modules/fetchApiData.js';
import './styles.css';

const closeModal = document.getElementById('close');
const modal = document.querySelector('.comments');

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

fetchApiData();

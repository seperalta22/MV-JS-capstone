import fetchApiData from './modules/fetchApiData.js';
import './styles.css';
import logoImage from './assets/pokemon.svg';

const logo = document.querySelector('.logo');
logo.src = logoImage;
fetchApiData();

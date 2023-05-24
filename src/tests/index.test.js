import commentsCounter from '../modules/commentsCounter.js';
import pokemonsCount from '../modules/pokemonCount.js';

describe('commentsCounter', () => {
  beforeEach(() => {
    const countText = document.createElement('span');
    countText.id = 'comments-counter';
    document.body.appendChild(countText);
  });

  afterEach(() => {
    const countText = document.getElementById('comments-counter');
    if (countText) {
      countText.remove();
    }
  });

  it('update comment counter successfully', async () => {
    // Arrange
    const count = 5;

    // Act
    await commentsCounter(count);

    // Assert
    const countText = document.getElementById('comments-counter');
    expect(countText.innerText).toBe(`Comments (${count})`);
  });
});

// Create a DOM mock
document.body.innerHTML = `
  <div id="pokemon-count"></div>
  <div class="card"></div>
  <div class="card"></div>
`;

describe('pokemonsCount', () => {
  test('Update the counter element with the correct number of pokemons', () => {
    pokemonsCount();

    const countElement = document.getElementById('pokemon-count');
    expect(countElement.innerText).toBe('2 Pokemons');
  });
});

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

  test('update comment counter successfully when no comments', async () => {
    // Arrange
    const count = 0;

    // Act
    await commentsCounter(count);

    // Assert
    const countText = document.getElementById('comments-counter');
    expect(countText.innerText).toBe(`Comments (${count})`);
  });

  test('update comment counter successfully with large count', async () => {
    // Arrange
    const count = 1000000;

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

    // Act
    pokemonsCount();

    // Assert
    const countElement = document.getElementById('pokemon-count');
    expect(countElement.innerText).toBe('2 Pokemons');
  });

  test('Update the counter elements with zero when there are no cards', () => {
    // Arrange
    const cardsArr = document.getElementsByClassName('card');
    while (cardsArr.length > 0) {
      cardsArr[0].remove();
    }

    // Act
    pokemonsCount();

    // Assert
    const countElement = document.getElementById('pokemon-count');
    expect(countElement.innerText).toBe('0 Pokemons');
  });
});

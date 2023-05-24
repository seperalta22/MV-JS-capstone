const likesApi =	'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/edecTBZJTxSFvT9kueVx/likes';

const getLikes = async () => {
  try {
    const response = await fetch(likesApi);
    const json = await response.json();

    const cards = Array.from(document.querySelectorAll('.card'));
    const likesCounter = Array.from(
      document.querySelectorAll('.likes-counter'),
    );

    cards.forEach((card, index) => {
      const item = json.find((item) => item.item_id === card.id);
      if (item) {
        likesCounter[index].innerHTML = `${item.likes} likes`;
      }
    });
  } catch (error) {
    error('Error fetching likes:', error);
  }
};

const addLikes = async () => {
  const cards = document.querySelectorAll('.card');
  const likeCounters = document.querySelectorAll('.likes-counter');
  const likeBtns = document.querySelectorAll('.likes-btn');
  const likeIcons = document.querySelectorAll('.fa-heart');

  likeBtns.forEach((button, index) => {
    button.addEventListener('click', async () => {
      likeIcons[index].classList.remove('far');
      likeIcons[index].classList.add('fas');

      const currentLikes = parseInt(likeCounters[index].innerHTML, 10);
      const updatedLikes = currentLikes + 1;
      likeCounters[index].innerHTML = updatedLikes.toString();

      try {
        await fetch(likesApi, {
          method: 'POST',
          body: JSON.stringify({
            item_id: cards[index].id,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      } catch (error) {
        error('Error posting like:', error);
      }
    });
  });
};

export { getLikes, addLikes };

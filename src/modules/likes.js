const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/edecTBZJTxSFvT9kueVx/likes';

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

getLikes();

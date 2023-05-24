const commentsCounter = async (count) => {
  const countText = document.getElementById('comments-counter');
  countText.innerText = `Comments (${count})`;
};

export default commentsCounter;

import commentsCounter from '../modules/commentsCounter.js';

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

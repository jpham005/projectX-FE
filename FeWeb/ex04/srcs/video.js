const moreButton = document.querySelector('.moreButton');
const content = document.querySelector('.content');
const additionalContent = document.querySelector('.additionalContent');

moreButton.addEventListener('mouseup', () => {
  moreButton.style.display = 'none';
  additionalContent.removeAttribute('hidden');
});

const titles = document.querySelectorAll('.thumbnailTitle');
const popupContainerBackground = document.querySelector(
  '.popupContainerBackground'
);

titles.forEach((curr) => {
  curr.addEventListener('click', (e) => {
    popupContainerBackground.style.display = 'flex';

    const popupContent = document.querySelector('.popupContent');
    popupContent.innerHTML = e.target.innerHTML;
  });
});

const popupCloseButton = document.querySelector('.closePopupButton');
popupCloseButton.addEventListener('click', () => {
  popupContainerBackground.style.display = 'none';
});

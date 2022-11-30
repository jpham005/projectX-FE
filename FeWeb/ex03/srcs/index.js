const titles = document.querySelectorAll('.thumbnailTitle');
const videoHrefs = document.querySelectorAll('.videoHref');
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
popupCloseButton.addEventListener('mouseup', () => {
  popupContainerBackground.style.display = 'none';
});

videoHrefs.forEach((curr) => {
  curr.addEventListener('mouseup', (e) => {
    const newWindow = window.open('/video.html', '_blank');
    newWindow.onload = () => {
      const originTitle = e.target.parentNode.querySelector('.thumbnailTitle');
      const originContent = e.target.querySelector('.thumbnailContent');

      const newTitle = newWindow.document.querySelector('.title');
      const newContent = newWindow.document.querySelector('.content');

      newTitle.innerHTML = originTitle.innerHTML;
      newContent.innerHTML = originContent.innerHTML;
    };
  });
});

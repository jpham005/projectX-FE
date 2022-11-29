const titles = document.querySelectorAll('.thumbnailTitle');

titles.forEach((curr) => {
  curr.addEventListener('click', (e) => {
    const popup = window.open(
      './layerPopup.html',
      'titlePopup',
      'popup, width=800px, height=600px'
    );

    popup.onload = () => {
      const popupContent = popup.document.querySelector('.popupContent');
      popupContent.innerHTML = e.target.innerHTML;
    };
  });
});

const titles = document.querySelectorAll('.thumbnailTitle');

titles.forEach((curr) => {
  curr.addEventListener('click', (e) => {
    alert(e.target.innerHTML);
  });
});

// main.hbs 전용 스크립트
const searchButton = document.getElementById('searchButton');
const search = document.getElementById('search');
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = `/posts?search=` + search.value + `&page=1`;
});

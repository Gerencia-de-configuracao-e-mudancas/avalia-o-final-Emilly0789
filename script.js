// script.js — Toggle film details (sinopse e informações) when poster clicked
(function(){
  function toggleFilm(e){
    const img = e.currentTarget;
    const film = img.closest('.filme');
    const expanded = film.classList.toggle('expanded');
    img.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  function onKey(e){
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      toggleFilm(e);
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    const posters = document.querySelectorAll('.poster');
    posters.forEach(p => {
      p.addEventListener('click', toggleFilm);
      p.addEventListener('keydown', onKey);
    });
  });
})();

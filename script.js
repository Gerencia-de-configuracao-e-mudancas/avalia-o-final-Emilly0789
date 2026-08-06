// script.js — Toggle film details (sinopse e informações) when poster clicked
(function(){
  function setAria(film, expanded){
    const poster = film.querySelector('.poster');
    const btn = film.querySelector('.toggle-btn');
    if(poster) poster.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    if(btn) btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  function toggleFilm(e){
    const srcEl = e.currentTarget;
    const film = srcEl.closest('.filme');
    const expanded = film.classList.toggle('expanded');
    setAria(film, expanded);
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

    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(b => b.addEventListener('click', toggleFilm));

    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(o => o.addEventListener('click', toggleFilm));
  });
})();

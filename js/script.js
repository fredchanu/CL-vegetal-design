document.addEventListener('DOMContentLoaded', function() {
  const menuOverlay = document.getElementById('menu-overlay');
  const menuButton = document.getElementById('menu-button');
  const menuLinks = document.querySelectorAll('.menu-list a');
  const menuContainer = document.querySelector('.menu-container');

  // Ouvrir le menu au clic sur le logo
  menuButton.addEventListener('click', function() {
    menuOverlay.style.display = 'block';
  });

  // Fermer le menu dès qu'un lien est cliqué
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      menuOverlay.style.display = 'none';
    });
  });

  // Fermer le menu si on clique en dehors du conteneur du menu
  menuOverlay.addEventListener('click', function(e) {
    console.log('Overlay cliqué', e.target);
    if (e.target === menuOverlay) {
      menuOverlay.style.display = 'none';
    }
  });

  // Empêcher la propagation des clics dans le conteneur du menu
  menuContainer.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});


// Animation GSAP pour le texte hero
gsap.from(".hero-title", {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  delay: 0.5
});


//animation fade-in au scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.5 };
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});




document.addEventListener('DOMContentLoaded', function() {
  // Filtrage
  const filterButtons = document.querySelectorAll('.filter-btn');
  const gridItems = document.querySelectorAll('.grid-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Retire la classe active de tous les boutons et l'ajoute à celui cliqué
      const currentActive = document.querySelector('.filter-btn.active');
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      gridItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'inline-block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox
  const gridImages = document.querySelectorAll('.grid-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');

  gridImages.forEach(img => {
    img.addEventListener('click', function() {
      lightbox.style.display = 'flex';
      lightboxContent.src = this.src;
    });
  });

  closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});


$(document).ready(function(){
  $('#hero-carousel').carousel({
      interval: 5000,  // Change toutes les 5 secondes
      pause: false,    // Désactive complètement la pause au survol
      wrap: true       // Boucle infinie
  });
});


  







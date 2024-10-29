document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.getElementById("navbarNav");

    // Ensure the navbar starts in a collapsed state
    if (navbarCollapse.classList.contains("show")) {
        navbarToggler.classList.remove("collapsed");
        navbarCollapse.classList.remove("show");
    } else {
        navbarToggler.classList.add("collapsed");
    }
});




document.querySelector('.fit-read-more-btn').addEventListener('click', function() {
    alert("More information about Futuh International Tours coming soon!");
  });






  document.querySelectorAll('.trip-card').forEach(function(card) {
    card.addEventListener('touchstart', function() {
        card.classList.add('touch-active');
    });
    card.addEventListener('touchend', function() {
        setTimeout(() => card.classList.remove('touch-active'), 300); // remove class after animation
    });
});
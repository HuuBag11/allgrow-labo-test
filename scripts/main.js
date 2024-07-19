document.addEventListener("DOMContentLoaded", function() {
    var hamburgers = document.querySelectorAll(".btn-hamburger, .overlay, .sidebar__close");
    var sidebar = document.querySelector("#sidebar");
  
    hamburgers.forEach(function(hamburger) { 
      hamburger.addEventListener("click", function() {

        document.querySelector(".btn-hamburger").classList.toggle("is-active");
        document.querySelector(".overlay").classList.toggle("is-active");

        sidebar.classList.toggle("open");
      });
    });
});
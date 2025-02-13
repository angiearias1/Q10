document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("hidden");
                entry.target.classList.add("animate__fadeInUp"); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.3 }); 

    const elemento = document.getElementById("cards-partner");
    observer.observe(elemento);
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[data-scroll]").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const target = this.getAttribute("data-scroll");
            const targetSec = document.getElementById(target);

            if (targetSec) {
                targetSec.scrollIntoView({ behavior: "smooth" }); 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".header__toggle");
    const menu = document.querySelector(".header__menu");
    const links = document.querySelectorAll(".header__link");

    // Abrir/cerrar menú
    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace
    links.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});

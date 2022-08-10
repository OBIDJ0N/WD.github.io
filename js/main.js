const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__top-menu-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".menu__list-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
}))

   
 
 
// script.js
var path = window.location.pathname;
var page = path.split("/").pop();
const navLinks = document.querySelectorAll("div a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === page) {
        link.classList.add("active");
        
    }
});

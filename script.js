const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("#navbar");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
   navBar.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n =>n.
    addEventListener("click", () =>{
        hamburger.classList.remove("active");
        hamburger.classList.remove("#navbar");
    }))
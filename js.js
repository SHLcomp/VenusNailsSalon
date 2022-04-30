const burg = document.querySelector(".burg");
const navMenu = document.querySelector(".nav-menu");
const mobMenu = document.querySelector(".menu-barmobile");

burg.addEventListener("click", () => {
    burg.classList.toggle("active");
    navMenu.classList.toggle("active");
})
//* nhghjbyuj *//
document.querySelectorAll(".a").forEach(n => n. addEventListener("click" , () => {
        burg.classList.remove("active");
        navMenu.classList.remove("active");
        mobMenu.classList.remove("active");
    }))


    burg.addEventListener("click", () => {
        mobMenu.classList.toggle("active");
    })

    document.querySelectorAll(".inside-part1 , .inside-part2 , .inside-part3").forEach(n => n. addEventListener("click" , () => {
        mobMenu.classList.remove("active");
        burg.classList.remove("active");
    }))



   



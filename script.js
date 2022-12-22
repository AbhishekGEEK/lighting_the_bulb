const Bulb = document.querySelector("i")
const btn = document.querySelector(".slider");
const container = document.querySelector(".container");


btn.addEventListener("click",()=>{
    Bulb.classList.toggle("light");
    container.classList.toggle("container_back");
})
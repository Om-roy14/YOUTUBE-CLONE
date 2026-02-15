const btn = document.getElementById("hambtn");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

btn.addEventListener("click", ()=>{
  sidebar.classList.toggle("active");
  content.classList.toggle("shift");
});

const box = document.querySelector(".textsearch");
const input = document.querySelector(".inputs");

box.addEventListener("click", (e)=>{
    e.stopPropagation();
    box.classList.add("active");
    input.focus();
});

document.addEventListener("click", ()=>{
    box.classList.remove("active");
});
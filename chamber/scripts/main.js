const modified = document.querySelector("#lastModified");
const date = new Date();
modified.textContent = `Last Modifed: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getUTCSeconds()}`;


const hamburger = document.getElementById("hamburger");
const navigation = document.querySelector(".navigation")
hamburger.addEventListener("click", ()=>{
    navigation.classList.toggle("open");
})
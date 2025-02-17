const url = window.location.href.split("?")[1].split("&");
const submitted = document.querySelector("#date");
const date = new Date();
url[0] = url[0].replace("+", " ");
url[1] = url[1].replace("%40", "@");
url[2] = url[2].replaceAll("+", " ");

const info = document.querySelector("#information");

function displayInformation (url) {
    info.innerHTML = `
        <h2>Thanks for reaching out to us ${url[0].split("=")[1]}! We'll get back to you as soon as possible through your email. In the meantime, feel free to explore our website.</h2>
        <h3>There is a preview of your message to us:</h3>
        <p>${url[2].split("=")[1]}</p>
    `;
    if(localStorage.getItem("currentDate")){
        submitted.innerHTML = `
        <p>Form submitted ${localStorage.getItem("currentDate")}</p>
        `
    }
    else {
        submitted.innerHTML = `
        <p>Thanks for reaching out to us</p>
        `
    }
    localStorage.setItem("currentDate", date);
}
displayInformation(url);
const time = new Date();
const url = "https://api.openweathermap.org/data/2.5/weather?lat=6.5833&lon=3.75&appid=15b3c845efce804c56e0ccf9cfedc22f&units=metric"
let result = null;

const today = document.querySelector(".today");
const tomorrow = document.querySelector(".tomorrow");
const dayAfter = document.querySelector(".nextTommorow");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"]

today.textContent = `${days[time.getDay()]}: `;
tomorrow.textContent = `${days[time.getDay() + 1]}: `;
dayAfter.textContent = `${days[time.getDay() + 2]}: `;



async function weather (url) {
    const data = await fetch(url);
    if(data.ok) {
        result = await data.json();
        weatherUpdate(result);
    }
}
weather(url);

const weatherUpdate = (data) => {
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    const body = document.querySelector(".details")
    const image = document.createElement("img");
    const temp = document.createElement("p");
    const condition = document.createElement("p");
    const high = document.createElement("p");
    const low = document.createElement("p");

    image.setAttribute("src", iconUrl);
    temp.innerHTML = `${data.main.temp}&deg;C`;
    condition.textContent = data.weather[0].description;
    high.innerHTML = `High: ${data.main.temp_max}&deg;`;
    low.innerHTML = `Low: ${data.main.temp_min}&deg`;
    image.setAttribute("alt", condition);

    body.appendChild(image);
    body.appendChild(temp);
    body.appendChild(condition);
    body.appendChild(high);
    body.appendChild(low);
}



let randomNumber;

const members = "./data/members.json";
let result1 = null;
async function getmembers(url) {
    const data = await fetch(url);
    if(data.ok){
        result1 = await data.json()
        console.log(result1.data);
        setMembers(result1.data);
    }
}
getmembers(members);

const body1 = document.querySelector(".content2");
const setMembers = (members) => {
    for(i = 0; i<3; i++){
        randomNumber = Math.floor(Math.random() * 7);
    
        const section = document.createElement("section");
        section.setAttribute("width", "90%")
        section.setAttribute("class","members");
        const img = document.createElement("img");
    
        const name = document.createElement("h3");
        const tag = document.createElement("p");
        const email = document.createElement("p");
        const phone = document.createElement("p");
        const url = document.createElement("p");

        img.setAttribute("src",members[randomNumber].image);
        img.setAttribute("alt",members[randomNumber].name);
        name.textContent = members[randomNumber].name;
        email.textContent = members[randomNumber].email;
        phone.textContent = members[randomNumber].phone;
        url.textContent = members[randomNumber].website;

        section.appendChild(img);
        section.appendChild(name);
        section.appendChild(email);
        section.appendChild(phone);
        section.appendChild(url);

        body1.appendChild(section);
    }   
}
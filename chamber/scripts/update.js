const content = document.querySelector(".content");

const grid = document.querySelector(".grid");
const list = document.querySelector(".list");
grid.addEventListener("click", ()=>{
    content.classList.add("gridDisplay");
    content.classList.remove("listDisplay");
})
list.addEventListener("click", ()=>{
    content.classList.add("listDisplay");
    content.classList.remove("gridDisplay");
})


let result = null;
async function updateData() {
    result = await fetch("./data/members.json");
    if(result.ok){
        const data = await result.json();
        displayData(data.data);
    }
}

const displayData = (data) => {
    data.forEach(datum => {
        const body = document.querySelector(".content");

        const section = document.createElement("section");
        section.setAttribute("class", "members")

        const name = document.createElement("h2");
        const address = document.createElement("p");
        const website = document.createElement("a");
        const phone = document.createElement("p");
        const membership = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = datum.name;
        address.textContent = datum.address;
        phone.textContent = datum.phone;
        membership.textContent = `Membership Level: ${datum.membershipLevel}`
        website.textContent = datum.website;
        image.setAttribute("src", datum.image);
        image.setAttribute("loading", "lazy");
        image.setAttribute("alt", `Image of ${datum.name}`);
        website.setAttribute("cursor", "pointer");

        section.appendChild(name);
        section.appendChild(image);
        section.appendChild(phone);
        section.appendChild(address);
        section.appendChild(website)
        section.appendChild(membership);

        body.appendChild(section);
    });
}

updateData();
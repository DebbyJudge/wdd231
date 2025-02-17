const container = document.querySelector(".container");
const dialog = document.querySelector(".location");
const visited = document.querySelector("#visited");
const dateNow = Date.now();

async function loadCard() {
    const details = await fetch("./data/location.json")
    if (details.ok){
        const results = await details.json();
        displayResults(results);
    }
}

function displayResults(results){
    results.forEach(result => {
        const body = document.createElement("div");
        const name = document.createElement("h2");
        const address = document.createElement("address");
        const description = document.createElement("p");
        const image = document.createElement("figure");
        const img = document.createElement("img")
        const button = document.createElement("button");
        const close = document.createElement("button");

        name.textContent = result.name;
        address.textContent = result.address;
        img.src = result.image;
        img.alt = `Image of ${result.name}`;
        img.loading = 'lazy';
        image.appendChild(img);
        description.textContent = result.description;
        button.textContent = "Learn More";
        close.textContent = "Close";

        body.append(name, address, image, button);
        body.classList.add("card");

        button.addEventListener("click", ()=>{
            dialog.innerHTML = "";
            dialog.appendChild(name);
            dialog.appendChild(document.createElement("hr"));
            dialog.appendChild(description);
            dialog.appendChild(close);
            dialog.showModal();
        })
        close.addEventListener("click",()=>{
            dialog.close();
        })

        container.appendChild(body);
    });
}

loadCard();
document.addEventListener("DOMContentLoaded", ()=>{
    let last_visited = localStorage.getItem("visited");
    if (!last_visited) {
        visited.innerHTML = `<p>Welcome! Let us know if you have any questions.</p>`;
    }
    else {
        const lastVisitDate = new Date(parseInt(last_visited, 10));
        const timeDiff = dateNow - lastVisitDate.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); 

        if (daysDiff < 1) {
            visited.innerHTML = `<p>Back so soon! Awesome!</p>`;
        } else if (daysDiff === 1) {
            visited.innerHTML = `<p>You last visited 1 day ago.</p>`;
        } else {
            visited.innerHTML = `<p>You last visited ${daysDiff} days ago.</p>`;
        }
    }

    // Store the current visit time
    localStorage.setItem("visited", dateNow.toString());
})
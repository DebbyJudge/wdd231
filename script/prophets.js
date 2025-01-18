const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

let info = null;

async function getProphetsData(site) {
    const result = await fetch(site);
    if (result.ok){
        const data = await result.json();
        // console.table(data)}
        displayProphets(data.prophets);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement("section");
        card.setAttribute("class", "prophetDetail");
        console.log(card.classList);
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Potrait of ${prophet.name} ${prophet.lastName}`);
        portrait.setAttribute('loading', 'lazy');
        // portrait.setAttribute('width', '340');
        // portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetsData(url);
// displayProphets(info);
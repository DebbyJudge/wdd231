const url = "./scripts/game-engines.json";
const content = document.querySelector(".details");

const all = document.querySelector(".all");
const engines = document.querySelector(".engines");
const languages = document.querySelector(".languages");
const tools = document.querySelector(".tools");

async function loadDetails(url) {
    const result = await fetch(url);
    if(result.ok) {
        const data = await result.json();
        displayDetails(data);
    }
}

function displayDetails(data) {
    data.forEach(datum => {
        const div = createDetail(datum);
        content.appendChild(div);
    });
    
    all.addEventListener("click", ()=>{
        content.innerHTML = "";
        data.forEach(datum => {
            const div = createDetail(datum);
            content.appendChild(div);
        })
    })

    engines.addEventListener("click",()=>{
        content.innerHTML = "";
        data.forEach(datum => {
            if(datum.detai == "game_engine"){
                const div = createDetail(datum);
                content.appendChild(div);
            }
        })
    })
    // engines.addEventListener("click", selectData(data, "game_engine"));

    languages.addEventListener("click",()=>{
        content.innerHTML = "";
        data.forEach(datum => {
            if(datum.detai == "programming_language"){
                const div = createDetail(datum);
                content.appendChild(div);
            }
        })
    })

    tools.addEventListener("click",()=>{
        content.innerHTML = "";
        data.forEach(datum => {
            if(datum.detai == "animation_tool"){
                const div = createDetail(datum);
                content.appendChild(div);
            }
        })
    })
}

function selectData(datum, argument){
    content.innerHTML = "";
    datum.forEach(data => {
        if(data.detai = argument){
            const div = createDetail(datum);
            content.appendChild(div);
        }
        else if(argument == "programming_language"){
            const div = createDetail(datum);
            content.appendChild(div);
        }
        else if(argument == "animation_tool"){
            const div = createDetail(datum);
            content.appendChild(div);
        }
        else {
            const div = createDetail(datum);
            content.appendChild(div);
        }
    })
}

function createDetail(datum) {
    const div = document.createElement("div");
    const name = document.createElement("h3");
    const description = document.createElement("span");

    name.textContent = datum.name;
    if(datum.example_games){
        description.innerHTML = `
        <p>${datum.description}</p>
        <p>Some Example Games includes: ${datum.example_games}</p>
        `;
    }
    else if (datum.used_in) {
        description.innerHTML = `
        <p>${datum.description}</p>
        <p>This language is used in: ${datum.used_in}</p>
        `;
    }
    else {
        description.innerHTML = `
        <p>${datum.description}</p>
        <p>This software is used for: ${datum.used_for}</p>
        `;
    }

    div.append(name,description);
    return div;
}


loadDetails(url);
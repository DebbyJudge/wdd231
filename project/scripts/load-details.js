const content = document.querySelector(".details");
const url = "./scripts/details.json"
const dialog = document.querySelector("dialog");

async function loadcontent(url) {
    const data = await fetch(url);
    if(data.ok){
        const result = await data.json();
        updateDetails(result);
    }
}

function updateDetails(results){
    results.forEach(result => {
        const div = document.createElement("div");
        const title = document.createElement("h3");
        const details = document.createElement("p");
        const img = document.createElement("img");
        const button = document.createElement("button");
        const close = document.createElement("button");

        title.textContent = result.title;
        img.src = result.img;
        img.alt = result.title;
        img.loading = "lazy";
        details.textContent = result.details;
        button.textContent = "Load More";
        close.textContent = "Close";

        div.append(img,title,button);
        content.appendChild(div);

        button.addEventListener("click", ()=>{
            dialog.innerHTML = "";
            const titleClone = title.cloneNode(true);
            dialog.append(titleClone, details, close);
            dialog.showModal();

            close.addEventListener("click", () => {
                dialog.close();
            })
        })
    });
}

loadcontent(url);
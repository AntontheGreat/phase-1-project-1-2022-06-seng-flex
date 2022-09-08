const catPhoto = document.getElementById("cat-photo");
let list = [];
document.addEventListener("DOMContentLoaded", () => {
    fetchCatPic();
    nameCat();
    getNextCat();
    toggleDarkMode();
 });

const fetchCatPic = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(url => {
                const img = document.createElement("img")
                img.src = data[0].url
                catPhoto.append(img)
            })
        })
};

function nameCat() {
    document.getElementById("name-cat-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const cat = document.getElementById("yourName");
        const name = document.createElement("h1");
        name.textContent = e.target.description.value;
        cat.append(name);
    })
};

function getNextCat() {
    const input = document.getElementById("getNextCat");
    input.addEventListener("click", fetchCatPic);
};

function toggleDarkMode() {
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    })
};
const catPhoto = document.getElementById("cat-photo");
let cats = []
document.addEventListener("DOMContentLoaded", () => {
    fetchRandomCatPic();
    nameCat();
    toggleDarkMode();
    getNextCat();
 });


const fetchRandomCatPic = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(resp => resp.json())
        .then(data => {
            catPhoto.innerHTML = `<img src="${data[0].url}"/>`
            appendCatList(data);
        })
};

function getNextCat() {
    const input = document.getElementById("getNextCat");
    input.addEventListener("click", fetchRandomCatPic);
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

function appendCatList(cats) {
    const ul = document.getElementById("list");
    cats.map(cat => {
        const li = document.createElement("li")
        li.textContent = cat
        ul.append(li)
    })
};

function toggleDarkMode() {
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    })
};
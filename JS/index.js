const catPhoto = document.getElementById("cat-photo")
const nameCatBtn = document.getElementById("nameBtn")
document.addEventListener("DOMContentLoaded", () => {
    fetchRandomCatPic();
    nameCat();
    toggleDarkMode();
 });


const fetchRandomCatPic = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(resp => resp.json())
        .then(data => {
            catPhoto.innerHTML = `<img src="${data[0].url}"/>`
        })
}

function nameCat() {
    document.getElementById("name-cat-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const cat = document.getElementById("yourName")
        const name = document.createElement("h1");
        name.textContent = e.target.description.value;
        cat.append(name);
    })
}

function toggleDarkMode() {
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    })
}
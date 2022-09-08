const catPhoto = document.getElementById("cat-photo");
let cats = [];
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
            cats = Object.keys(data[0].url)
            showCatInList(cats);
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
    input.addEventListener("click", fetchRandomCatPic);
};

function showCatInList(cat) {
    const catCollection = document.getElementById("listContainer");
    const div = document.createElement("div");
    div.classList.add("card")

    const h2 = document.createElement("h2");
    h2.textContent = cat.name

    const img = document.createElement("img")
    img.src = catPhoto
    img.classList.add("catAvatar")

    div.append(h2, img)
    catCollection.append(div)
}

function toggleDarkMode() {
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    })
};
let seaBox = document.querySelector("#seaBox");
let search = document.querySelector("#search");
let main = document.querySelector("main");


const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


async function api(DATA) {


    let url = await fetch(DATA);
    const response = await url.json();
    console.log(response);
    arr(response);

}

function arr(response) {
    main.innerHTML = " ";
    response.results.forEach(e => {

        let div = document.createElement("div");
        div.classList.add('card');
        div.innerHTML = `<img id="img" src="${IMGPATH + e.poster_path}" alt="${e.title}" > 
        <div class="detail">
        <h1>${e.title}</h1>
        <p id="para"> ${e.overview}</p>
        <div id="span">
            <p> Release Date : ${e.release_date}</p>
            <p>duration : ${e.popularity}</p>
            <p>Rating :❤️ ${e.vote_average}</p>
        </div>
    </div>`
        main.appendChild(div);
    });
    document.querySelectorAll(".card").forEach(card => {
        card.querySelector("#img").addEventListener("mouseover", () => {
            card.querySelector(".detail").style.visibility = "visible";
        });
        card.querySelector("#img").addEventListener("mouseleave", () => {
            card.querySelector(".detail").style.visibility = "hidden";
        });
    });

}

search, seaBox.addEventListener("keyup", async (e) => {
    e.preventDefault();
    let movie = seaBox.value.trim();
    if (movie !== "") {
        await api(SEARCHAPI + movie);
    } else api(APIURL);

});
api(APIURL)

function hover(card) {

}

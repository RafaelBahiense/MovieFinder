askMovieCatalog();

function askMovieCatalog() {
    const requestResponse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");
    requestResponse.then(buildMovieCatalog);
    requestResponse.catch(refused);
}

function buildMovieCatalog(response) {
    const arrayMovies = response.data;
    console.log(arrayMovies);
    for(let i = 0; i < arrayMovies.length; i++) {
        const image = arrayMovies[i].imagem;
        const title = arrayMovies[i].titulo;
        document.querySelector(".movies").innerHTML += `<div class="movie">
                                                            <img src="${image}">
                                                            <div class="title">${title}</div>
                                                            <button>
                                                                Comprar
                                                                <ion-icon name="cart-outline"></ion-icon>
                                                            </button>
                                                        </div>`
    }
}



function accepted(response) {

}

function refused(error) {

}
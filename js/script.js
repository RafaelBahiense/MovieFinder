askMovieCatalog();

function askMovieCatalog() {
    const requestResponse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");
    requestResponse.then(buildMovieCatalog);
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
                                                            <button onclick="askInfo(this)" id="${i}">
                                                                Comprar
                                                                <ion-icon name="cart-outline"></ion-icon>
                                                            </button>
                                                        </div>`
    }
}

function askInfo(element) {
    let name = prompt("Qual o seu nome?");
    while (name === ""){
        name = prompt("Insira seu nome");
    }
    if (name === null){
        return
    }
    let tickets = parseInt(prompt("Quantos assentos?"));
    while (tickets === NaN){
        tickets = parseInt(prompt("Insira um número de assentos"));
    }
    if (tickets === null){
        return
    }
    const id = element.id
    console.log(id);
    buyTickets(name,tickets, id);
}

function buyTickets(name, tickets, id) {
    const purchase = {
        nome: name,
        quantidade: tickets
    };
    const requestResponse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${id}/ingresso`, purchase);
    requestResponse.then(accepted);
    requestResponse.catch(refused);
}

function accepted(response) {
    alert("Ingresso comprado com sucesso!");
}

function refused(error) {
    alert("Os ingressos para este filme estão esgotados!");
}
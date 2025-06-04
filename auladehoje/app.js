let filme1 = {
    titulo: "Jurassic Park 0",
    foto: "filme1.webp",
    avaliacao: "10/10",
    duracao: "1h50m"
}

let filme2 = {
    titulo: "Karate Kid Lendas",
    foto: "filme2.jpg",
    avaliacao: "6/10",
    duracao: "2h10m",
}

let filme3 = {
    titulo: "Lilo e Stitch",
    foto: "filme3.jpg",
    avaliacao: "7/10",
    duracao: "1h50m"
}

let filme4 = {
    titulo: "Pecadores",
    foto: "filme4.jpg",
    avaliacao: "5/10",
    duracao: "2h40m",
}

function fnMontaCartao(filmeAtual) {
    document.querySelector(".lista-filmes").innerHTML += `
        <div class="card-filme">
            <img src="img/${filmeAtual.foto}">
            <h3>${filmeAtual.titulo}</h3>
            <span>⭐ ${filmeAtual.avaliacao}</span>
        `
}

fnMontaCartao(filme1)
fnMontaCartao(filme2)
fnMontaCartao(filme3)
fnMontaCartao(filme4)

let filme1 = {
    titulo: "Jurassic Park 0",
    foto: "filme1.webp",
    avaliacao: "10/10",
    duracao: "1h50m",
    link: "https://netflix.com"
}

let filme2 = {
    titulo: "Karate Kid Lendas",
    foto: "filme2.jpg",
    avaliacao: "6/10",
    duracao: "2h10m",
    link: "https://whatsapp.com"
}

let filme3 = {
    titulo: "Lilo e Stitch",
    foto: "filme3.jpg",
    avaliacao: "7/10",
    duracao: "1h50m",
    link: "https://facebook.com"
}

let filme4 = {
    titulo: "Pecadores",
    foto: "filme4.jpg",
    avaliacao: "5/10",
    duracao: "2h40m",
    link: "https://instagram.com"
}

let filme5 = {
    titulo: "Alien: Romulus",
    foto: "filme5.jpg",
    avaliacao: "8/10",
    duracao: "1h 59m",
    link: "https://www.rottentomatoes.com/m/alien_romulus",
}


let todosOsFilmes = [
    filme1, filme2, filme3, filme4, filme5
]

todosOsFilmes.forEach((i)=>{
    document.querySelector(".lista-filmes").innerHTML += `
    <div class="card-filme">
        <img src="img/${i.foto}">
        <h3>${i.titulo}</h3>
        <span>⭐ ${i.avaliacao}</span>
        <a href="${i.link}" target="_blank">Acesse:</a>
    </div>
    `
})
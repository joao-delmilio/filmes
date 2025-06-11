async function fnPegarFilmes(){
    let filmes = await fetch("dados-filmes.json")
    console.dir(filmes)
    let filmesTratados = await filmes.text()
    console.dir(filmesTratados)
}

fnPegarFilmes()
console.log("return")
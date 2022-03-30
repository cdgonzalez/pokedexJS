const fetchPokemon = () => {
    const nombrePokemon = document.getElementById("nombrePokemon");
    let pokeInput = nombrePokemon.value.toLowerCase(); 
    const url =  `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        //console.log(res);
        if(res.status != 200) {
            console.log(res);
            pokeImage("./pokemon-sad.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeimg = data.sprites.front_default;
        pokeImage(pokeImg);
    });   
}

//fetchPokemon();
 
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImage");
    pokeImg.src = url;
}

const imprimir = () => {
    const nombrePokemon = document.getElementById("nombrePokemon");
    let pokeInput = nombrePokemon.value.toLowerCase();
    let pokeURL = fetchPokemon(pokeInput);
    //console.log("Hola " + pokeInput);
}

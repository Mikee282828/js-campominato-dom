let griglia = document.getElementById("griglia");
let avvia = document.getElementById("avvia");
let gameMode = document.getElementById("gameMode");

avvia.addEventListener("click",function(){
    console.log("Reset");
    griglia.innerHTML="";
    if(gameMode.value=="Easy"){
        console.log("La modalità selezionata è: Easy");
        gridGenerator("square100",100);
    }else if(gameMode.value=="Medium"){
        console.log("La modalità selezionata è: Medium");
        gridGenerator("square81",81);
    }else if(gameMode.value=="Hard"){
        console.log("La modalità selezionata è: Hard");
        gridGenerator("square49",49);
    }
})

function createSquare(classe,nIterazione){
    let element = document.createElement("div");
    element.classList.add(classe);
    // click
    element.addEventListener("click",function(){
        element.classList.toggle("bkg_azzurro");
        console.log(nIterazione);
    })
    return element;
}
function gridGenerator(classe,nSquare){
    for(let i = 1; i <= nSquare; i++){
        // creo elemento e lo metto all'interno della griglia
        let elemento = createSquare(classe,i);
        griglia.append(elemento);
    }
}
let griglia = document.getElementById("griglia");
let avvia = document.getElementById("avvia");
let gameMode = document.getElementById("gameMode");

avvia.addEventListener("click",function(){
    let bombs = [];
    bombGenerator(bombs,16,100);
    //reset
    console.log("Reset, le bombe sono:",bombs);
    griglia.innerHTML="";
    //gamemode selection
    //easy mode
    if(gameMode.value=="Easy"){
        console.log("La modalità selezionata è: Easy");
        gridGenerator("square100",100,bombs);
    }
    //medium mode
    else if(gameMode.value=="Medium"){
        console.log("La modalità selezionata è: Medium");
        gridGenerator("square81",81,bombs);
    }
    //hard mode
    else if(gameMode.value=="Hard"){
        console.log("La modalità selezionata è: Hard");
        gridGenerator("square49",49,bombs);
    }
})

function createSquare(classe,nIterazione,bombe){
    let element = document.createElement("div");
    element.classList.add(classe);
    //click
    element.addEventListener("click",function(){
        if(bombe.includes(nIterazione)){
            element.classList.add("bkg_rosso")
        }else{
            element.classList.add("bkg_azzurro");
        }
        console.log(nIterazione);
    })
    return element;
}

function gridGenerator(classe,nSquare,bombe){
    for(let i = 1; i <= nSquare; i++){
        let elemento = createSquare(classe,i,bombe);
        griglia.append(elemento);
    }
}

// funzione che genera le bombe
function bombGenerator(listName,length,range){
    while(listName.length<length){
        let bomb = Math.ceil(Math.random()*range);
        if(listName.includes(bomb)){
        }else{
            listName.push(bomb);
        }
    }
}
let griglia = document.getElementById("griglia");
let avvia = document.getElementById("avvia");
let gameMode = document.getElementById("gameMode");
let points = 0;
avvia.addEventListener("click",function(){
    //reset
    points = 0;
    let bombs = [];
    console.log("Reset");
    griglia.innerHTML="";

    //easy mode
    if(gameMode.value=="Easy"){
        bombGenerator(bombs,16,100);
        console.log("La modalità selezionata è: Easy");
        gridGenerator("square100",100,bombs);
    }
    //medium mode
    else if(gameMode.value=="Medium"){
        bombGenerator(bombs,16,81);
        console.log("La modalità selezionata è: Medium");
        gridGenerator("square81",81,bombs);
    }
    //hard mode
    else if(gameMode.value=="Hard"){
        bombGenerator(bombs,16,49);
        console.log("La modalità selezionata è: Hard");
        gridGenerator("square49",49,bombs);
    }
})

function gridGenerator(classe,nSquare,bombe){
    for(let i = 1; i <= nSquare; i++){
        let elemento = createSquare(classe,i,bombe);
        griglia.append(elemento);
    }
}

function createSquare(classe,nIterazione,bombe){
    let element = document.createElement("div");
    element.classList.add(classe);
    //click
    element.addEventListener("click",function(){
        if(bombe.includes(nIterazione)){
            element.classList.add("bkg_rosso");
        }else{
            element.classList.add("bkg_azzurro");
            points +=100;
            console.log(points);
        }
    })
    return element;
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
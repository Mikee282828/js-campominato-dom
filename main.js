let griglia = document.getElementById("griglia");
let avvia = document.getElementById("avvia");
let gameMode = document.getElementById("gameMode");
let points = 0;
let match = true;

avvia.addEventListener("click", function () {
    //reset
    points = 0;
    match = true;
    let bombs = [];
    console.log("Reset");
    griglia.innerHTML = "";

    //easy mode
    if (gameMode.value == "Easy") {
        bombGenerator(bombs, 16, 100);
        console.log("La modalità selezionata è: Easy");
        gridGenerator("square100", 100, bombs);
    }
    //medium mode
    else if (gameMode.value == "Medium") {
        bombGenerator(bombs, 16, 81);
        console.log("La modalità selezionata è: Medium");
        gridGenerator("square81", 81, bombs);
    }
    //hard mode
    else if (gameMode.value == "Hard") {
        bombGenerator(bombs, 16, 49);
        console.log("La modalità selezionata è: Hard");
        gridGenerator("square49", 49, bombs);
    }
})

function gridGenerator(classe, nSquare, bombe) {
    for (let i = 1; i <= nSquare; i++) {
        let elemento = createSquare(classe, i, bombe, nSquare);
        griglia.append(elemento);
    }
}

function createSquare(classe, nIterazione, bombe, nSquare) {
    let element = document.createElement("div");
    let clicked = false;
    element.classList.add(classe);
    //click
    element.addEventListener("click", function () {
        if (bombe.includes(nIterazione) && match == true && clicked == false) {
            element.classList.add("bkg_rosso");
            console.log("You lost!",points);
            match = false;
            clicked = true;
            alert("You lost!");
        } else if (match == true && clicked == false && (points / 100) == (nSquare - 17)) {
            console.log("Congratz, You Won!",points);
            element.classList.add("bkg_azzurro");
            clicked = true;
            match = false;
            alert(`Congratz, You Won! ${points+100}`);
        } else if (match == true && clicked == false) {
            element.classList.add("bkg_azzurro");
            points += 100;
            console.log(points);
            clicked = true;
        }
    })
    return element;
}

// funzione che genera le bombe
function bombGenerator(listName, length, range) {
    while (listName.length < length) {
        let bomb = Math.ceil(Math.random() * range);
        if (listName.includes(bomb)) {
        } else {
            listName.push(bomb);
        }
    }
    //ordino la lista per testare meglio la vincita
    listName.sort(function(a, b){return a-b});
    console.log(listName);
}
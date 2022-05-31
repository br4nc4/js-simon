//variabili globali
const numbersContainer = document.getElementById("numbersContainer");
const enteredNumbers=[];
const readNumbersMemory = [];
const numIndovinati =[];

const countDown = document.getElementById("time");
let secondiRimanenti = 30;

//funzione per generare 5 numeri casuali
function randomNumbers(){
    for(let i=0; i<5; i++){
        const random = Math.floor(Math.random() * 1000)+1;
        readNumbersMemory.push(random);
    }
    return readNumbersMemory;
}

//stampare a video i numeri dell'array readNumbersMemory
const numbers = document.createElement("div");
numbers.innerText = randomNumbers();
numbers.classList.add("numbers");
numbersContainer.append(numbers);

//funzione che visualizza a schermo il countDown di 30s
//raggiunto lo scadere del tempo
//secondi = 0 i numeri visualizzati scompaiono
const hideNumbers = setInterval(function(){
    secondiRimanenti--;
    countDown.innerText = secondiRimanenti;
    if(secondiRimanenti == 0){
        numbers.classList.add("nullNumber")
        clearInterval(hideNumbers);
    }
},1000)

//creare una funzione che chiede all'utente di inserire
//per 5 volte i numeri visualizzati in precedenza a schermo
//questa funzione si attiva dopo 30 secondi
setTimeout(requestUserNumbers, 31000);

function requestUserNumbers(readNumbersMemory){
    //da prompt chiedere per 5 volte dei numeri
    for (let i =0; i<5; i++){
    const inputNumbers = prompt("inserisci gli stessi numeri visualizzati a schermo");
    enteredNumbers.push(parseInt(inputNumbers));
    //console.log(enteredNumbers);
    if(readNumbersMemory.includes(parseInt(enteredNumbers[i]))){
        numIndovinati.push(enteredNumbers[i])
        console.log(numIndovinati);
    }
    }
} 

































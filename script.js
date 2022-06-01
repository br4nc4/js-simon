//variabili globali
const numbersContainer = document.getElementById("numbersContainer");
const userNumbers=[];
const memoryNumbers = [];
const numIndovinati =[];

const numbers = document.createElement("div");

const countDown = document.getElementById("timer");
let secondiRimanenti = 30;

//funzione per generare 5 numeri casuali
function randomNumbers(){
    for(let i=0; i<5; i++){
        const random = Math.floor(Math.random() * 200)+1;
        memoryNumbers.push(random);
    }
    //stampare a video i numeri dell'array memoryNumbers
    numbers.innerText = memoryNumbers;
    numbers.classList.add("numbers");
    numbersContainer.append(numbers);
}

randomNumbers();

//funzione che visualizza a schermo il countDown di 30s
//raggiunto lo scadere del tempo
//secondi = 0 i numeri visualizzati scompaiono
const hidenNumbers = setInterval(function(){
    secondiRimanenti--;
    countDown.innerText = secondiRimanenti;
    if(secondiRimanenti == 0){
        numbers.classList.add("nullNumber")
        clearInterval(hidenNumbers);
    }
},1000)

//creare una funzione che chiede all'utente di inserire
//per 5 volte i numeri visualizzati in precedenza a schermo
//questa funzione si attiva dopo 30 secondi
setTimeout(requestUserNumbers, 31000);

function requestUserNumbers(memoryNumbers){
    //da prompt chiedere per 5 volte dei numeri
    for (let i =0; i<5; i++){
    const inputNumbers = prompt("inserisci gli stessi numeri visualizzati a schermo");
    userNumbers.push(parseInt(inputNumbers));
    //console.log(userNumbers);
    if(memoryNumbers.includes(userNumbers[i])){
        numIndovinati.push(userNumbers[i])
    }
    }
} 

































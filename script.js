//variabili globali
const numbersContainer = document.getElementById("numbersContainer");
const enteredNumbers=[];
const readNumbersMemory = [1278, 859, 12, 43, 106];
const numIndovianti =[];

const countDown = document.getElementById("time");
let secondiRimanenti = 30;

//stampare a video i numeri dell'array readNumbersMemory
const numbers = document.createElement("div");
numbers.innerText = readNumbersMemory;
numbers.classList.add("numbers");
numbersContainer.append(numbers);

//funzione che visualizza a schermo il countDown di 30s
//raggiunto lo scadere del tempo
//secondi = 0 i numeri visualizzati scompaiono
setInterval(function(){
    secondiRimanenti--;
    countDown.innerText = secondiRimanenti;
    if(secondiRimanenti == 0){
        numbers.classList.add("nullNumber")
    }
},1000)

//creare una funzione che chiede all'utente di inserire
//per 5 volte i numeri visualizzati in precedenza a schermo
//questa funzione si attiva dopo 30 secondi
setTimeout(requestUserNumbers, 31000);

function requestUserNumbers(){
    //chiede dal prompt per 5 volte dei numeri
    for (let i =0; i<5; i++){
    const inputNumbers = prompt("inserisci gli stessi numeri visualizzati a schermo");
    enteredNumbers.push(parseInt(inputNumbers));
    }
}

//come faccio a verificare che i nuemri inseriti
//dall'utente sono uguali a quelli dell'array iniziale?
for (let i = 0; i<enteredNumbers.length; i++){

}















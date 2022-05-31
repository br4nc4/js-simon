const numbersContainer = document.getElementById("numbersContainer");
const enteredNumbers=[];
const readNumbersMemory = [78, 85, 12, 43, 106];


//stampare a video i numeri dell'array readNumbersMemory
const numbers = document.createElement("div");
numbers.innerText = readNumbersMemory;
numbers.classList.add("numbers");
numbersContainer.append(numbers);




//creare una funzione che chiede all'utente di inserire
//per 5 volte i numeri visualizzati in precedenza a schermo
//questa funzione si attiva dopo 30 secondi
//questsa funzione fa anche sparire dallo schermo i numeri

setTimeout(requestUserNumbers, 30000);

function requestUserNumbers(){
    
    //chiede dal prompt per 5 volte dei numeri
    for (let i =0; i<5; i++){
    const inputNumbers = prompt("inserisci gli stessi numeri visualizzati a schermo");
    enteredNumbers.push(parseInt(inputNumbers));
    }
    
}













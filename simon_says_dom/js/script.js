//seleziono gli elementi
const contoRovescia = document.getElementById("countdown");
const listaNumeriGenerati = document.getElementById("numbers-list");
const inputRisposte = document.getElementById("answers-form");
const bottone = document.querySelector(".btn-primary");
const messaggio = document.getElementById("message");

//setto il countdown
//setto variabile conteggio 
let count = 30;
let timeout = setInterval(() => {
    if(count === -1) {
        clearInterval(timeout);
        listaNumeriGenerati.classList.add("d-none");
        contoRovescia.classList.add("d-none");
    } else {
    //decremento e output
    contoRovescia.innerText = count--;
    
    }
}, 1000);


//seleziono una funzione di generatore casuale di numeri 
function numRandomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numRandomGen(10, 50));


// funzione che genera un array di tot numeri in un range
function arrayUniqueNumbers(numMin, numMax, numberElemnts) {
    // mi creo un array vuoto di partenza
    const numeriArray = [];
    // ciclo l'array creato FINO CHE è più corto di numberElemnts 
    for(let i=0; i<numberElemnts; i++){
        
        // genero un numero random in un range
        let nuovoNumero = numRandomGen(numMin, numMax);
        // verifico se nuovoNumero è già incluse nell'array creato
        // SE NON è vero
        if(numeriArray.includes(nuovoNumero)===false) {
            // lo pusho nell'array creato
        numeriArray.push(nuovoNumero); 
         listaNumeriGenerati.innerText= numeriArray;
        }
        }      
    }  
console.log(arrayUniqueNumbers(10, 50, 5));



//seleziono elemento di output

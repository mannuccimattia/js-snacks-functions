/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// // Dichiara la funzione qui.
// function firstLetters(namesArray){
//   const lettersArray = [];
//   for(i=0; i<namesArray.length; i++){
//     lettersArray.push(namesArray[i][0]);
//   }
  
//   return lettersArray;
// }

// Risoluzione con arrow function
firstLetters = (namesArray) => {
  const lettersArray = [];
  for(i=0; i<namesArray.length; i++){
    lettersArray.push(namesArray[i][0]);
  }
  
  return lettersArray;
}

// Invoca la funzione qui e stampa il risultato in console
let letters = firstLetters(names);
console.log(letters);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
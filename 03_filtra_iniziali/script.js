/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function checkInitials(array, letter){
  const initials = [];
  for(i=0; i<array.length; i++){
    if(array[i][0] === letter){
      initials.push(array[i]);
    }
  }

  return initials;
}


// Invoca la funzione qui e stampa il risultato in console
let initial = prompt("Inserisci una lettera.").toUpperCase();
let filteredNames = checkInitials(names, initial);
console.log(filteredNames);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
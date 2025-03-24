/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// // Dichiara la funzione qui.
// function helloUser(user){
//   return `Ciao ${user}`;
// }

// Risoluzione con arrow function.
helloUser = (user) => `Ciao ${user}`;

// // Invoca la funzione qui e stampa il risultato in console
let welcomeUser = helloUser(userName);
console.log(welcomeUser);


//Risultato atteso se si passa 'Mario': // ciao Mario

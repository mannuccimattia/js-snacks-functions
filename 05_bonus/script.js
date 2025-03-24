/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function betterWelcome(user){
  const date = parseInt(new Date().toLocaleTimeString("it-IT").substring(0,2));
  if(date < 13){
    console.log("Buongiorno", user);
  }
  else if(date > 17){
    console.log("Buonasera", user);
  }
  else{
    console.log("Buon pomeriggio", user);
  }
}

// Invoca la funzione qui e stampa il risultato in console
betterWelcome(name);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
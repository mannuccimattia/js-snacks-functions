/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// // Dichiara la funzione qui.
// function checkVowels(string){
//   let vowelNum = 0;
//   let vowels = ["a", "e", "i", "o", "u"];
//   for(i=0; i<string.length; i++){
//     for(j=0; j<vowels.length; j++){
//       if(string[i].toLowerCase() === vowels[j]){
//         vowelNum += 1;
//       }
//     }
//   }

//   return vowelNum;
// }

// Risoluzione con arrow function
checkVowels = (string) => {
  let vowelNum = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for(i=0; i<string.length; i++){
    for(j=0; j<vowels.length; j++){
      if(string[i].toLowerCase() === vowels[j]){
        vowelNum += 1;
      }
    }
  }

  return vowelNum;
}


// Invoca la funzione qui e stampa il risultato in console
let vowelNumber = checkVowels(word);
console.log(vowelNumber);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
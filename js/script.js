// // esercizio numero 1: Parola Palindroma
//
// // 1. chiedo all'utente una parola
// var parolaUtente = prompt("inserisci una parola");
//
// // 2. Creare una funzione per capire se la parola inserita è palindroma
//
// // creo funzione che torni una parola al contrario
// function wordReverse(word) {
//   // variabili
//   var reverseWord = "";
//   // attraverso la stringa e ritorno l'inverso
//   for (var i = (word.length - 1); i >= 0 ; i--) {
//     // wordReverse += word[i];
//     reverseWord += word[i];
//   }
//   return reverseWord;
// }
//
// // uso la funzione e controllo se parola inserita è Palindroma
// if (parolaUtente == wordReverse(parolaUtente)) {
//   console.log("la parola è palindroma");
// } else {
//   console.log("la parola non è palindroma");
// }


// esercizio numero 2: Pari e dispari
// variabili
var evenOddValues = document.getElementsByClassName('even-odd-values');
var number = document.getElementById('number');

// funzione per generare numero random da x a y
function randomGenerator(x, y) {
  return Math.floor(Math.random() * (y - x + 1) ) + x;
}

console.log(randomGenerator(1, 5));

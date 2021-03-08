// esercizio numero 1: Parola Palindroma

// 1. chiedo all'utente una parola
var parolaUtente = prompt("inserisci una parola");

// 2. Creare una funzione per capire se la parola inserita è palindroma

// creo funzione che torni una parola al contrario
function wordReverse(word) {
  // variabili
  var reverseWord = "";
  // attraverso la stringa e ritorno l'inverso
  for (var i = (word.length - 1); i >= 0 ; i--) {
    // wordReverse += word[i];
    reverseWord += word[i];
  }
  return reverseWord;
}

console.log(wordReverse(parolaUtente));

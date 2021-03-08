// esercizio numero 1: Parola Palindroma

// 1. chiedo all'utente di inserire una parola
var parolaUtente = document.getElementById('word-input');

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

button.addEventListener("click",
function () {
  // uso la funzione e controllo se parola inserita è Palindroma
  if (parolaUtente.value != "") {
    if (parolaUtente.value == wordReverse(parolaUtente.value)) {
      document.getElementById('first-result').innerHTML = "la parola è palindroma";
    } else {
      document.getElementById('first-result').innerHTML = "la parola non è palindroma";
    }
  } else {
    alert("inserisci una parola nel gioco 1");
  }
}
);



// esercizio numero 2: Pari e dispari
// variabili
var evenOddValues = document.getElementsByClassName('even-odd-values');
var numberUser = document.getElementById('number');
var btn = document.getElementById('btn');
var numberComputer = randomGenerator(1, 5);

// funzione per generare numero random da x a y
function randomGenerator(x, y) {
  return Math.floor(Math.random() * (y - x + 1) ) + x;
}

// funzione per stabilire se la somma di due numeri è pari o dispari
function sumIsEvenOrOdd(a, b) {
  if ((a + b) % 2 == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

// genero l'evento al click sul bottone
btn.addEventListener("click",
  function () {
    // controllo che venga inserito un numero
    if (numberUser.value != "") {
      // controllo i valori checkati
      var val = "";

      // controllo se è stato scelto pari o dispari
      if (evenOddValues[0].checked) {
          val = evenOddValues[0].value;
      } else {
        val = evenOddValues[1].value;
      }

      // stampo risultato se la somma e il numero random sono entrambi pari o dispari
      if (sumIsEvenOrOdd(numberComputer, parseInt(numberUser.value)) == val) {
        document.getElementById('second-result').innerHTML = "il numero del computer è " + numberComputer + ", hai vinto!!";
      } else {
        document.getElementById('second-result').innerHTML = "il numero del computer è " + numberComputer + ", hai perso";
      }
    } else {
      alert("inserisci un numero da 1 a 5");
    }
  }
);

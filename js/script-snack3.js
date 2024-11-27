/*
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

Pseudo:
1. Creo un array con degli elementi random
2. Creo una const che accetti la mia funzione
3. Intesto funzione a tre parametri === min , max , array
4. La funzione ha un array vuoto da popolare al suo interno
5. Ho pushato in questo array, utilizzando il metodo slice, gli elementi di 'array'.
6. Nelle parentesi dello slice ho dato al min un +1, perchè se no mi aggiungerebbe l'elemento di quell'esatto indice, mentre noi vogliamo quelli compresi tra i due valori di min e max.
*/

const arrayFrutta = ['banana','mela','pera','arancia','kiwi','ananas'];
const miniArrayFrutta = valori(1,4,arrayFrutta);
console.log(miniArrayFrutta);


function valori (min,max,array){
  let newArray = [];
  newArray.push(array.slice(min +1,max))
  return newArray
}
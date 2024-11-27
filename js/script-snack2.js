/*
Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

Pseudo:
1. Creo array di partenza con vari oggetti squadra.
2. Creo la funzione per i numeri random e li attribuisco ai punti e ai falli subiti se il loro valore è = a 0.
3. Creo nuovo array con gli stessi oggetti ma senza la proprietà dei punti fatti.
*/

let squadreCampionato = [
  {
    nome : 'Inter',
    punti: 0,
    falli: 0
  },
  {
    nome : 'Milan',
    punti: 0,
    falli: 0
  },
  {
    nome : 'Juventus',
    punti: 0,
    falli: 0
  },
  {
    nome : 'Roma',
    punti: 0,
    falli: 0
  },
  {
    nome : 'Lazio',
    punti: 0,
    falli: 0
  }
]

function randomNumber(){
  return Math.ceil(Math.random()*100)
}


for(let i=0 ; i < squadreCampionato.length ; i++){
  squadreCampionato[i].punti = randomNumber();
  squadreCampionato[i].falli = randomNumber();
}


let squadreCampionatoSenzaPunti = [];
for(let i = 0 ; i < squadreCampionato.length ; i++){
  let squadra = {
    nome: squadreCampionato[i].nome,
    falli: squadreCampionato[i].falli
  };
  squadreCampionatoSenzaPunti.push(squadra);
}

console.log(squadreCampionato);
console.log(squadreCampionatoSenzaPunti);





/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Pseudo:
1. Creo array con 5 biciclette e le loro proprietà.
2. Creo un ciclo for partendo da una let con valore di default la bici numero 1.
3. Una volta trovata la inserisco in HTML per stamparla in pagina.
*/

const biciclette = [
  {
    nome : 'la bicicletta classica',
    peso : 9
  },
  {
    nome : 'il tandem',
    peso : 20
  },
  {
    nome : 'la mountain bike',
    peso : 8
  },
  {
    nome : 'la bicicletta con rotelle',
    peso : 10
  },
  {
    nome : 'la bicicletta da corsa',
    peso : 15,
  },
]

let biciclettaLeggera = biciclette[0]

for (let i = 0 ; i < biciclette.length ; i++){
  const bicicletta = biciclette[i];
  if(bicicletta.peso < biciclette[0].peso){
    biciclettaLeggera=bicicletta
  }
}

document.getElementById('titolo').innerHTML=`La bicicletta che pesa di meno è ${biciclettaLeggera.nome}`;
document.getElementById('peso').innerHTML=`e il suo peso è di kg. ${biciclettaLeggera.peso}!`
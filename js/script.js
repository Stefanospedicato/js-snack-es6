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
    nome : 'bicicletta classica',
    peso : 9
  },
  {
    nome : 'tandem',
    peso : 20
  },
  {
    nome : 'mountain bike',
    peso : 8
  },
  {
    nome : 'bicicletta con rotelle',
    peso : 10
  },
  {
    nome : 'bicicletta da corsa',
    peso : 5,
  },
]

let biciclettaLeggera = biciclette[0]

for (let i = 0 ; i < biciclette.length ; i++){}
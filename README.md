Snack Array e Oggetti
===
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

## Papar Information
- Per il primo snack:
 - Ho creato l'array con diversi oggetti al suo interno
 - Ho cosi attribuito ad una variabile il fatto che di default una delle biciclette fosse già la più leggera (variabile bicicletteLeggera)
 - Con un classico ciclo for ho determinato poi la variabile del singolo oggetto dell'array (bicicletta in questo caso)
 - Con l'if ho determinato che se la bicicletta presa in questione fosse più leggera della precedente, essa sarebbe diventata la nuova biciclettaLeggera.
 - Ho poi messo tutto in pagina html

- Per il secondo snack:
 - Ho creato il mio array iniziale con 5 squadre e le loro proprietà.
 - Ho creato la funzione per generare i numeri casuali.
 - Ho creato un ciclo for classico per assegnare alle proprietà dei punti e dei falli i numeri casuali.
 - Sono passato al punto successivo e ho creato un array vuoto da popolare con le stesse squadre e ma sono con la proprietà falli e nome.
 - Per popolarlo ho creato un altro ciclo for dove attribuisco ad una variabile chiamata squadra il formato scelto per il nuovo oggetto.
 - Ho pushato il tutto nel nuovo array.
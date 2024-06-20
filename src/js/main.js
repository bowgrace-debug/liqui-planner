'use strict';

// Eingabedaten holen
let titel_1 = prompt('Titel: ');
let typ_1 = prompt('Typ (Einnahme oder Ausgabe):');
let betrag_1 = prompt('Betrag (in Cent):');
let datum_1 = prompt('Datum (jjjj-mm-tt):');

console.log(titel_1);
console.log(typ_1);
console.log(betrag_1);
console.log(datum_1);

// Gesamtbilanz
let einnahmen;
let ausgaben;
let bilanz;
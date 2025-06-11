/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//array con squadre di calcio e proprietà :nome, punti fatti, falli subiti.
const squadre = [
  { nome: "squadra1", punti: 0, falliSubiti: 0 },
  { nome: "squadra2", punti: 0, falliSubiti: 0 },
  { nome: "squadra3", punti: 0, falliSubiti: 0 },
  { nome: "squadra4", punti: 0, falliSubiti: 0 },
  { nome: "squadra5", punti: 0, falliSubiti: 0 },
  { nome: "squadra6", punti: 0, falliSubiti: 0 },
  { nome: "squadra7", punti: 0, falliSubiti: 0 },
];
//ciclo di array per squadre
for (let i = 0; i < squadre.length; i++) {
  const squadra = squadre[i];
  //generatore random di numeri (falli)(math permette di svolgere funzioni algebriche, ceil arrotonda a numeri interi, random genera numeri random)
  squadra.falliSubiti = Math.ceil(Math.random() * 100);
  //generatore random di numeri(punti)
  squadra.punti = Math.ceil(Math.random() * 25);
}
//stampa risultato
console.log(squadre);

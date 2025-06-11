console.log("work it");

const bikes = [
  { nome: "bici A", peso: 7 }, //0 -> Obj .
  { nome: "bici B", peso: 5 }, // 1
  { nome: "bici C", peso: 8 }, //2
  { nome: "bici D", peso: 8.5 }, // 3
  { nome: "bici E", peso: 3 }, //4
  { nome: "bici E", peso: 9 }, //4
];

const bikes2 = [
  { nome: "bici A", peso: 7 }, //0 -> Obj .
  { nome: "bici B", peso: 5 }, // 1
  { nome: "bici C", peso: 2 }, //2
  { nome: "bici D", peso: 8.5 }, // 3
  { nome: "bici E", peso: 3 }, //4
  { nome: "bici E", peso: 9 }, //4
];

//console.log(bikes.length); // 5

// let lightestBike = bikes[0]; // inital default

// // loopare sui dati a disposizione

// for (let i = 0; i < bikes.length; i++) {
//   // log dell'elemento array durante l'iterazione
//   const bike = bikes[i];
//   console.log(bike);

//   // { nome: "bici A", peso: 7 }
//   // COnfronto tra le bici per capire chi ha il peso + leggero
//   if (lightestBike.peso > bike.peso) {
//     lightestBike = bike;
//   }
// }

// Output console bici + leggera
// console.log(
//   `la bicicletta piu leggera è : ${lightestBike.nome}, il suo peso è ${lightestBike.peso}`
// );

function getLighterBike(list) {
  let lightestBike = list[0]; // inital default

  // loopare sui dati a disposizione

  for (let i = 0; i < list.length; i++) {
    // log dell'elemento array durante l'iterazione
    const bike = list[i];
    // console.log(bike);

    // { nome: "bici A", peso: 7 }
    // COnfronto tra le bici per capire chi ha il peso + leggero
    if (lightestBike.peso > bike.peso) {
      lightestBike = bike;
    }
  }

  // Output console bici + leggera
  console.log(
    `la bicicletta piu leggera è : ${lightestBike.nome}, il suo peso è ${lightestBike.peso}`
  );
}
getLighterBike(bikes);
getLighterBike(bikes2);

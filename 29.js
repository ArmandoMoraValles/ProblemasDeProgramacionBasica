// 29.- Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10. 

let count = 0;

for (let i = 0; i < 100; i++) {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;

  if (dice1 + dice2 === 10) {
    count++;
  }
}

console.log(`En 100 tiradas de dos dados la suma fue 10 un total de ${count} veces`);

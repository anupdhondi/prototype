let animal = {
  eats: true,
};

let rabbit = {
  runs: true,
  __proto__: animal,
};

console.log(Object.keys(rabbit)); //only gives own properties

//Gives own and inherited keys
for (let keys in rabbit) {
  console.log(keys);
}

function prototypicalInheritence() {
  const animal = {
    eats: true,
  };
  const rabbit = {
    runs: true,
    __proto__: animal,
  };

  console.log(rabbit.eats);
}
prototypicalInheritence();

//The prototype chain can be longer:
let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)

// There are only two limitations:

// The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// The value of __proto__ can be either an object or null. Other types are ignored.

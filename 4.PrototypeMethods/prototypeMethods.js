let animal = {
  eats: true,
};

const rabbit = Object.create(animal);

console.log(Object.getPrototypeOf(rabbit) === animal);

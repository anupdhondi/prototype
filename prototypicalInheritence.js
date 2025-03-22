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

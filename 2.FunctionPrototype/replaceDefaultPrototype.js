function Rabbit() {}
Rabbit.prototype = {
  jumps: true,
};
let rabbit = new Rabbit();
console.log(rabbit.construtor == Rabbit); // gives false

//way to preserve default prototype
function Rabbit2() {}
Rabbit2.prototype = {
  jumps: true,
  construtor: Rabbit2,
};
let rabbit2 = new Rabbit2();
console.log(rabbit2.construtor == Rabbit2); // gives true

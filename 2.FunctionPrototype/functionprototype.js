let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal; //whenever new rabbit is created, assign animal as its prototype

let rabbit = new Rabbit("Vishnu");
console.log(Rabbit);

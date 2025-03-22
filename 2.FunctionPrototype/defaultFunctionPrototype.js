//Every function has the "prototype" property even if we don’t supply it.

//The default "prototype" is an object with the only property constructor that points back to the function itself.

function Rabbit() {}

console.log(Rabbit.prototype.constructor == Rabbit); //gives true as mentioned above

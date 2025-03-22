let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); //true

//For arrays
let arr = [1, 2, 3];

// it inherits from Array.prototype?
console.log(arr.__proto__ === Array.prototype); // true

// then from Object.prototype?
console.log(arr.__proto__.__proto__ === Object.prototype); // true

// and null on the top.
console.log(arr.__proto__.__proto__.__proto__); // null

//As we remember, they are not objects. But if we try to access their properties,
// temporary wrapper objects are created using built-in constructors String, Number and Boolean.
// They provide the methods and disappear.
console.log(Boolean.prototype, String.prototype, Number.prototype);

// Special values null and undefined stand apart.
// They have no object wrappers, so methods and properties are not available for them.
// And there are no corresponding prototypes either.

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

function f() {
  console.log("hello");
}
Function.prototype.defer = function (time) {
  setTimeout(this, time);
};
f.defer(1000);

function b() {
  console.log("Bhow");
}
b.defer(1000);

function fc(a, b) {
  alert(a + b);
}

Function.prototype.defer2 = function (time) {
  let f = this;
  return function (...args) {
    return setTimeout(() => f.apply(this, args), time);
  };
};

console.log(fc.defer2(1000)(1, 2));

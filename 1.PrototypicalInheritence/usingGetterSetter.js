let user = {
  name: "Anup",
  surname: "Dhondi",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

const newUser = {
  name: "Lalitha",
  surname: "Dhondi",
  __proto__: user,
};

console.log(user.fullName);

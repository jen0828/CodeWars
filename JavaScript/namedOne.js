// https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript

// kata(6kyu):


// My solution: 

class NamedOne {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
    this.fullName = `${value} ${this.lastName}`;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
    this.fullName = `${this.firstName} ${value}`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(' ');
    if (firstName && lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  }
}

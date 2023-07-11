class Car {
  model;
  constructor(model) {
    this.model = model;
    this.fuel = 0;
  }
  getCarModel() {
    console.log(`Car model is ${this.model}`);
  }
  addFuel(value) {
    this.fuel += value;
  }
}

const car1 = new Car("Buggati");
const car2 = new Car("Alto");
console.log(`current fuel ${car1.fuel}`);
car1.addFuel(50);
console.log(`fuel after addition ${car1.fuel}`);

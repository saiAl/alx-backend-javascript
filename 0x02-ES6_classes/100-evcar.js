import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /* eslint class-methods-use-this: off */
  cloneCar() {
    this._new = new Car();
    return this._new;
  }
}

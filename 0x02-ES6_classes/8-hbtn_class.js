export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](cast) {
    return cast === 'string' ? this._location : this._size;
  }
}

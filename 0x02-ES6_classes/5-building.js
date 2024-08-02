export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (
      this.evacuationWarningMessage() === false && this.constructor.name !== 'Building'
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    return false;
  }
}

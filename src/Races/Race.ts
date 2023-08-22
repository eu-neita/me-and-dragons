abstract class Race {
  private static _createdRacesInstances = 0;
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race._createdRacesInstances += 1;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  abstract get maxLifePoints(): number;
}

export default Race;

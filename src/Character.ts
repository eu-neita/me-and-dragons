import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character {
  private _race : Race;
  private _archetype: Archetype;
  private maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = 10;
    this._race = new Elf(this._name, 10);
    this._archetype = new Mage(this._name);
    this.maxLifePoints = (this.race.maxLifePoints / 2);
    this._lifePoints = this.race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    this._lifePoints -= (damage > 0) ? damage : 1;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }
}

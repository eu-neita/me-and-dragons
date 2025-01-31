import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import { SimpleFighter } from './Fighter';
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

  attack(enemy: Character | SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    const increment = getRandomInt(1, 10);
    const lifepoints = this._lifePoints;
    this._strength += increment;
    this._dexterity += increment;
    this._defense += increment;
    this._energy.amount = 10;
    this._lifePoints = (lifepoints + getRandomInt(1, 10)) 
    > lifepoints ? lifepoints : (lifepoints + getRandomInt(1, 10));
  }

  special(enemy: Character): void {
    enemy.receiveDamage(this.strength + this.strength + this.strength);
  }
}

import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character {
  private race : Race;
  private archetype: Archetype;
  private maxLifePoints: number;
  private lifePoints: number;
  private strength: number;
  private defense: number;
  private dexterity: number;
  private energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this.dexterity = 10;
    this.race = new Elf(this._name, 10);
    this.archetype = new Mage(this._name);
    this.maxLifePoints = (this.race.maxLifePoints / 2);
    this.lifePoints = this.race.maxLifePoints;
    this.strength = getRandomInt(1, 10);
    this.defense = getRandomInt(1, 10);
    this.energy = { 
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10) };
  }
}
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import getRandomInt from './utils';

const random = getRandomInt(1, 10);

class Character implements Fighter {
  private _name: string;
  private _dexterity: number;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = random;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = random;
    this._defense = random;
    this._energy = {
      type_: this._archetype.energyType,
      amount: random,
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }
  
  get name(): string {
    return this._name;
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
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;   
    let lifePoints = this._lifePoints;
      
    if (damage > 0) lifePoints -= damage;
    
    if (lifePoints <= 0) lifePoints = -1;
    this._lifePoints = lifePoints;
    return lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special() {
    this._maxLifePoints = this._race.maxLifePoints;
    this._strength = 10;
    this._dexterity = 10;
    this._defense = 10;
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  levelUp(): void {
    this._maxLifePoints = (this._maxLifePoints + random) 
      >= this._race.maxLifePoints 
      ? this._race.maxLifePoints : this._maxLifePoints + random;
    this._lifePoints = this._maxLifePoints;
    this._maxLifePoints += random;
    this._strength += random;
    this._dexterity += random;
    this._defense += random;
    this._energy.amount = 10;
  }
}

export default Character;

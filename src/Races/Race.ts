import { IRace } from './IRace';

abstract class Race {
  protected _name;
  private _dexterity;
    
  constructor({ name, dexterity }:IRace) {
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances() {
    throw new Error('Not implemented');
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract maxLifePoints(): number; 
}

export default Race;
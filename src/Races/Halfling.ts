import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;    
  }

  static createdRacesInstances(): number {
    return Halfling.instanceCount;
  }
}

export default Halfling;

import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;    
  }

  static createdRacesInstances(): number {
    return Orc.instanceCount;
  }
}

export default Orc;
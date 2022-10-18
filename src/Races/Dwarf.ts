import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;    
  }

  static createdRacesInstances(): number {
    return Dwarf.instanceCount;
  }
}

export default Dwarf;
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  _energyType: EnergyType;
  private static instanceCount = 0;

  constructor(name: string) {
    super(name);
    Warrior.instanceCount += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this.instanceCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
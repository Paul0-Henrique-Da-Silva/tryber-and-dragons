import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  _energyType: EnergyType;
  private static instanceCount = 0;

  constructor(name: string) {
    super(name);
    Ranger.instanceCount += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this.instanceCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  _energyType: EnergyType;
  private static instanceCount = 0;

  constructor(name: string) {
    super(name);
    Necromancer.instanceCount += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this.instanceCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
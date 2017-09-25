import { Item, Weapon } from './item';
import { Character } from './character';

export class CharacterItems extends Character {
  items: {
    averageItemLevel: number;
    averageItemLevelEquipped: number;
    head: Item;
    neck: Item;
    shoulder: Item;
    back: Item;
    chest: Item;
    shirt: Item;
    wrist: Item;
    hands: Item;
    waist: Item;
    legs: Item;
    feet: Item;
    finger1: Item;
    finger2: Item;
    trinket1: Item;
    trinket2: Item;
    mainHand: Weapon;
    offHand?: Weapon;
  };
}

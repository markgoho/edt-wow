import { Character } from './character';

export class CharacterStats extends Character {
  stats: Stats;
}

export class Stats {
  empty?: boolean;
  health: number;
  powerType: string;
  power: number;
  str: number;
  agi: number;
  int: number;
  sta: number;
  speedRating: number;
  speedRatingBonus: number;
  crit: number;
  critRating: number;
  haste: number;
  hasteRating: number;
  hasteRatingPercent: number;
  mastery: number;
  masteryRating: number;
  leech: number;
  leechRating: number;
  leechRatingBonus: number;
  versatility: number;
  versatilityDamageDoneBonus: number;
  versatilityHealingDoneBonus: number;
  versatilityDamageTakenBonus: number;
  avoidanceRating: number;
  avoidanceRatingBonus: number;
  spellPen: number;
  spellCrit: number;
  spellCritRating: number;
  mana5: number;
  mana5Combat: number;
  armor: number;
  dodge: number;
  dodgeRating: number;
  parry: number;
  parryRating: number;
  block: number;
  blockRating: number;
  mainHandDmgMin: number;
  mainHandDmgMax: number;
  mainHandSpeed: number;
  mainHandDps: number;
  offHandDmgMin: number;
  offHandDmgMax: number;
  offHandSpeed: number;
  offHandDps: number;
  rangedDmgMin: number;
  rangedDmgMax: number;
  rangedSpeed: number;
  rangedDps: number;
}

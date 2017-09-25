import { Item } from './item';

export class ItemDetail extends Item {
  disenchantingSkillRank: number;
  description: string;
  stackable: number;
  itemBind: number;
  bonusStats: [
    {
      stat: number;
      amount: number;
    },
    {
      stat: number;
      amount: number;
    },
    {
      stat: number;
      amount: number;
    },
    {
      stat: number;
      amount: number;
    }
  ];
  itemSpells: string[];
  buyPrice: number;
  itemClass: number;
  itemSubClass: number;
  containerSlots: number;
  weaponInfo: {
    damage: {
      min: number;
      max: number;
      exactMin: number;
      exactMax: number;
    };
    weaponSpeed: number;
    dps: number;
  };
  inventoryType: number;
  equippable: boolean;
  itemLevel: number;
  maxCount: number;
  maxDurability: number;
  minFactionId: number;
  minReputation: number;
  quality: number;
  sellPrice: number;
  requiredSkill: number;
  requiredLevel: number;
  requiredSkillRank: number;
  itemSource: {
    sourceId: number;
    sourceType: string;
  };
  baseArmor: number;
  hasSockets: boolean;
  isAuctionable: boolean;
  nameDescription: string;
  nameDescriptionColor: number;
  upgradable: boolean;
  heroicTooltip: boolean;
  availableContexts: string[];
  bonusSummary: {
    defaultBonusLists: string[];
    chanceBonusLists: string[];
    bonusChances: string[];
  };
}

export class Item {
  id: number;
  name: string;
  icon: string;
  quality: number;
  itemLevel: number;
  tooltipParams: {
    timewalkerLevel: number;
  };
  stats: [
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
  armor: number;
  context: string;
  bonusLists: string[];
  artifactId: number;
  displayInfoId: number;
  artifactAppearanceId: number;
  artifactTraits: string[];
  relics: string[];
  appearance: {
    itemId: number;
    transmogItemAppearanceModId: number;
  };
}

export class Weapon extends Item {
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
}

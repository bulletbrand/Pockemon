export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface IPokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  slot: number;
  is_hidden: boolean;
}

export interface IHeldItem {
  item: {
    name: string;
    url: string;
  };
}

export interface IPokemonDetails {
  name: string;
  order: number;
  base_experience: number;
  height: number;
  weight: number;
  held_items: IHeldItem[];
  abilities: IPokemonAbility[];
  sprites: {
    front_default: string;
    back_default: string;
  };
  stats: IPokemonStat[];
}

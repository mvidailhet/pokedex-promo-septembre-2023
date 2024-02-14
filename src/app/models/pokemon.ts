export interface Pokemon {
  name: string;
  gender: PokemonGender;
}

export const pokemonGenders = ['male', 'female'] as const;
export type PokemonGender = typeof pokemonGenders[number];

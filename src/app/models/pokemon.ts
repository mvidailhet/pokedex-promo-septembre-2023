export interface CreatePokemon {
  name: string;
  gender: PokemonGender;
}

export interface Pokemon extends CreatePokemon {
  id: string;
}

export const pokemonGenders = ['male', 'female'] as const;
export type PokemonGender = typeof pokemonGenders[number];

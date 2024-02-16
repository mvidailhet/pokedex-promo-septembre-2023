export interface GetPokemonsResult {
  count:    number;
  next:     string;
  previous: null;
  results:  SimplePokemon[];
}

export interface SimplePokemon {
  name: string;
  url:  string;
}


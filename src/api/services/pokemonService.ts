import { apiClient } from '../apiClient';

export const getAllPokemons = async () => {
  const { data } = await apiClient.get('/pokemon', {
    params: {
      limit: 2000,
    },
  });

  return data.results;
};

export const getPokemonInfo = async (name: string) => {
  const { data } = await apiClient.get(`/pokemon/${name}`);

  return data;
};

export const pokemonService = {
  getAllPokemons,
  getPokemonInfo,
};

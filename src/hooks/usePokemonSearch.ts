import axios from 'axios';
import { useEffect, useState } from 'react';
import { pokemonService } from 'src/api/services/pokemonService';
import { IPokemon } from 'src/models/Pokemons';
import useDebounce from './useDebounce';

const getFilteredPokemons = (pokemonList: IPokemon[], debouncedSearchValue: string) => {
  return pokemonList.filter((pokemon) => pokemon.name.includes(debouncedSearchValue.toLowerCase()));
};

const usePokemonSearch = (value: string) => {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [searchResults, setSearchResults] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const debouncedSearchValue = useDebounce(value);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const pokemons = await pokemonService.getAllPokemons();

        setPokemonList(pokemons);
        setLoading(false);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        }
      }
    };

    getPokemons();
  }, []);

  useEffect(() => {
    if (debouncedSearchValue.length >= 1) {
      const filteredPokemons = getFilteredPokemons(pokemonList, debouncedSearchValue);

      setSearchResults(filteredPokemons);
    } else {
      setSearchResults([]);
    }
  }, [pokemonList, debouncedSearchValue]);

  return { pokemonList, searchResults, loading, error, debouncedSearchValue };
};

export default usePokemonSearch;

import React, { useState } from 'react';
import usePokemonSearch from 'src/hooks/usePokemonSearch';
import PokemonList from './components/PokemonList/PokemonList';
import startSearchImg from 'src/assets/images/pickaStartSearch.png';
import PokemonNotFound from './components/PokemonNotFound/PokemonNotFound';
import styles from './SearchPokemonsPage.module.scss';

const SearchPokemonsPage = () => {
  const [pokemonValue, setPokemonValue] = useState('');

  const { searchResults, debouncedSearchValue } = usePokemonSearch(pokemonValue);

  const onChangePokemon = ({ target: { value } }: { target: { value: string } }) => setPokemonValue(value);

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchSection}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Find your Pokémon</h1>
        </div>
        <div className={styles.searchWrapper}>
          <div className={styles.inputWrapper}>
            <input
              data-testid="search-input"
              value={pokemonValue}
              onChange={onChangePokemon}
              className={styles.input}
              placeholder={'type pokémon name here...'}
            />
          </div>
          <div className={styles.startSearchImgWrapper}>
            <img src={startSearchImg} alt={'Start search image'} />
          </div>
        </div>
      </div>

      <div className={styles.listSection}>
        <h1 className={styles.title}>Pokémons</h1>
        {debouncedSearchValue && !searchResults.length && <PokemonNotFound />}
        {!debouncedSearchValue && (
          <div>
            <p className={styles.emptListText}>Please start typing to see available pokemons...</p>
          </div>
        )}
        {!!searchResults.length && <PokemonList searchResults={searchResults} />}
      </div>
    </div>
  );
};

export default SearchPokemonsPage;

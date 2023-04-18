import React from 'react';
import VirtualizedList from 'src/components/VirtualizedList/VirtualizedList';
import { useNavigate } from 'react-router-dom';
import { ListRowRenderer } from 'react-virtualized';
import { IPokemon } from 'src/models/Pokemons';
import PokemonCard from '../PokemonCard/PokemonCard';
import styles from './PokemonList.module.scss';

type PokemonListProps = {
  searchResults: IPokemon[];
};

const getPokemonRow: ListRowRenderer = ({ index, key, style, parent }) => {
  const {
    props: { data, onItemClick },
  } = parent;

  const searchValue = data[index];

  return (
    <PokemonCard
      key={key}
      style={style}
      searchValue={searchValue}
      onClick={() => onItemClick(`/info/${searchValue.name}`)}
    />
  );
};

const PokemonList = ({ searchResults }: PokemonListProps) => {
  const navigate = useNavigate();

  const goToPokemonInfo = (path: string) => navigate(path);

  return (
    <div className={styles.wrapper}>
      <VirtualizedList
        data={searchResults}
        rowHeight={120}
        overScanRowCount={3}
        renderRow={getPokemonRow}
        onItemClick={goToPokemonInfo}
      />
    </div>
  );
};

export default PokemonList;

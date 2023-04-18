import React, { CSSProperties } from 'react';
import { getFormattedPokyName, getUrlId } from 'src/utils/helpers';
import { POKEMON_IMG_URL } from 'src/constants/common';
import Image from 'src/components/Image/Image';
import unknownPokemon from 'src/assets/images/unknownPokemon.png';
import { IPokemon } from 'src/models/Pokemons';
import styles from './PokemonCard.module.scss';

type PokemonCardProps = {
  style: CSSProperties;
  searchValue: IPokemon;
  onClick: () => (path: string) => void;
};

const PokemonCard = ({ style, searchValue, onClick }: PokemonCardProps) => {
  const id = getUrlId(searchValue.url);

  return (
    <div className={styles.wrapper} style={style} onClick={onClick} role={'button'} data-testid="pokemon-card-item">
      <div className={styles.imgWrapper}>
        <Image src={`${POKEMON_IMG_URL}/${id}.png`} alt={'Pokemon image'} defaultImage={unknownPokemon} />
      </div>
      <div className={styles.name}>{getFormattedPokyName(searchValue.name)}</div>
    </div>
  );
};

export default PokemonCard;

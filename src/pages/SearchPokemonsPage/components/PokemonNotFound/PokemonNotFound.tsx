import React from 'react';
import styles from './PokemonNotFound.module.scss';
import sadPokemon from 'src/assets/images/sadPokemon.png';

const PokemonNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={sadPokemon} alt={'pokemon not found image'} />
      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.text}>No Pokémon found</h3>
      </div>
    </div>
  );
};

export default PokemonNotFound;

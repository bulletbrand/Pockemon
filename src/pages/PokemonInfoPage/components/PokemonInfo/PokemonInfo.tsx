import React from 'react';
import styles from './PokemonInfo.module.scss';

type PokemonInfoProps = {
  exp: number;
  weight: number;
  height: number;
};

const PokemonInfo = ({ exp, weight, height }: PokemonInfoProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoBlock}>
        <h3>EXP:</h3>
        <span>{exp}</span>
      </div>
      <div className={styles.infoBlock}>
        <h3>Height:</h3>
        <span>{height}</span>
      </div>
      <div className={styles.infoBlock}>
        <h3>Weight:</h3>
        <span>{weight}</span>
      </div>
    </div>
  );
};

export default PokemonInfo;

import React from 'react';
import { getFormattedPokyName } from 'src/utils/helpers';
import styles from './PokemonName.module.scss';

type PokemonNameProps = {
  name: string;
  order: number;
};

const PokemonName = ({ name, order }: PokemonNameProps) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.name}>{`#${order} ${getFormattedPokyName(name)}`}</h3>
    </div>
  );
};

export default PokemonName;

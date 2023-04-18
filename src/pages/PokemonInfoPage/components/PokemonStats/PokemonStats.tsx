import React from 'react';
import { IPokemonStat } from 'src/models/Pokemons';
import { getFormattedPokyName } from 'src/utils/helpers';
import styles from './PokemonStats.module.scss';

type PokemonStatsProps = {
  stats: IPokemonStat[];
};

const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stats}>
        {stats.map((item) => (
          <div key={item.stat.name}>
            <span className={styles.statName}>{getFormattedPokyName(item.stat.name)}:</span>
            <span className={styles.statValue}>{item.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;

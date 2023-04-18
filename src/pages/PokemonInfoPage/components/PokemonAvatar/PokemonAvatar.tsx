import React from 'react';
import Image from 'src/components/Image/Image';
import unknownPokemon from 'src/assets/images/unknownPokemon.png';
import { IPokemonDetails } from 'src/models/Pokemons';
import styles from './PokemonAvatar.module.scss';

type PokemonAvatarProps = Pick<IPokemonDetails, 'sprites'>;

const PokemonAvatar = ({ sprites }: PokemonAvatarProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarWrapper}>
        <Image src={sprites.front_default} alt="pokemon avatar front" defaultImage={unknownPokemon} />
      </div>
    </div>
  );
};

export default PokemonAvatar;

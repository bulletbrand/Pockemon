import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { pokemonService } from 'src/api/services/pokemonService';
import { IPokemonDetails } from 'src/models/Pokemons';
import Spinner from 'src/components/Spinner/Spinner';
import { LOCATIONS } from 'src/constants/locations';
import PokemonAvatar from './components/PokemonAvatar/PokemonAvatar';
import PokemonName from './components/PokemonName/PokemonName';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import PokemonStats from './components/PokemonStats/PokemonStats';
import styles from './PokemonInfoPage.module.scss';

const PokemonInfoPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState<IPokemonDetails | null>(null);

  useEffect(() => {
    const getPokemonInfo = async (name: string) => {
      try {
        const info = await pokemonService.getPokemonInfo(name);

        setInfo(info);
        setIsLoading(false);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          console.error('getPokemonInfo request error', err.message);
        }
      }
    };

    name && getPokemonInfo(name);
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.wrapper}>
      {info && (
        <div className={styles.pokemonInfo}>
          <div className={styles.mainInfo}>
            <PokemonName name={info.name} order={info.order} />
            <PokemonAvatar sprites={info.sprites} />
            <PokemonInfo exp={info.base_experience} height={info.height} weight={info.weight} />
          </div>
          <div className={styles.statsInfo}>
            <PokemonStats stats={info.stats} />
          </div>
        </div>
      )}
      <div className={styles.goBackWrapper}>
        <button className={styles.goBackButton} name="backButton" onClick={() => navigate(LOCATIONS.home)}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default PokemonInfoPage;

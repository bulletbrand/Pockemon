import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import SearchPokemonsPage from 'src/pages/SearchPokemonsPage/SearchPokemonsPage';
import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage';
import PokemonInfoPage from 'src/pages/PokemonInfoPage/PokemonInfoPage';
import MainLayout from 'src/layouts/MainLayout/MainLayout';
import { LOCATIONS } from 'src/constants/locations';

const Routes = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: LOCATIONS.home, element: <SearchPokemonsPage /> },
        { path: LOCATIONS.info, element: <PokemonInfoPage /> },
      ],
    },
    { path: '404', element: <NotFoundPage /> },
    { path: '*', element: <Navigate to={LOCATIONS.notFound} replace /> },
  ]);
};

export default Routes;

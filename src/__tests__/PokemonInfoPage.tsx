import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/extend-expect';
import { waitFor } from '@testing-library/react';
import PokemonInfoPage from 'src/pages/PokemonInfoPage/PokemonInfoPage';
import { screen } from '@testing-library/dom';
import mockPokemonData from './mocks/pokemon.json';
import { renderWithMemory } from 'src/test-utils/renderWithMemory';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    name: mockPokemonData.name,
  }),
}));

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon/metapod', (req, res, ctx) => {
    return res(ctx.json(mockPokemonData));
  }),
);

describe('PpkemonInfoPage tests', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it('PpkemonInfoPage component renders correctly', async () => {
    renderWithMemory(<PokemonInfoPage />);

    await waitFor(() => {
      expect(screen.getByText('#16 Metapod')).toBeInTheDocument();
      expect(screen.getByText('Go back')).toBeInTheDocument();
    });
  });
});

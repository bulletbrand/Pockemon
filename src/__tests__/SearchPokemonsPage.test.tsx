import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import SearchPokemonsPage from 'src/pages/SearchPokemonsPage/SearchPokemonsPage';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithMemory } from 'src/test-utils/renderWithMemory';

describe('SearchPokemonsPage tests', () => {
  const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');
  const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { configurable: true, value: 100 });
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 100 });
  });

  afterAll(() => {
    originalOffsetHeight && Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
    originalOffsetWidth && Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth);
  });

  it('SearchPokemonsPage component renders correctly', () => {
    render(<SearchPokemonsPage />);
    expect(screen.getByText('Find your Pokémon')).toBeInTheDocument();
    expect(screen.getByText('Please start typing to see available pokemons...')).toBeInTheDocument();
  });

  it('Pokemon can be found by full name', async () => {
    renderWithMemory(<SearchPokemonsPage />);

    await userEvent.type(screen.getByTestId('search-input'), 'Metapod');
    await waitFor(() => expect(screen.getByText('Metapod')).toBeInTheDocument());
  });

  it('Pokemon can be found by search string', async () => {
    renderWithMemory(<SearchPokemonsPage />);

    await userEvent.type(screen.getByTestId('search-input'), 'Metap');
    await waitFor(() => expect(screen.getByText('Metapod')).toBeInTheDocument());
  });

  it('Pokemon is not found when name is incorrect', async () => {
    renderWithMemory(<SearchPokemonsPage />);
    await userEvent.type(screen.getByTestId('search-input'), 'qwerty275');
    await waitFor(() => expect(screen.getByText('No Pokémon found')).toBeInTheDocument());
  });

  it('Pokemons list contains more than 1 item when name when searching by string', async () => {
    renderWithMemory(<SearchPokemonsPage />);

    await userEvent.type(screen.getByTestId('search-input'), 'Meta');

    await waitFor(() => {
      const list = screen.getAllByTestId('pokemon-card-item');
      expect(list.length).toBeGreaterThan(1);
    });
  });
});

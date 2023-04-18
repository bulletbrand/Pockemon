import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithMemory = (component: React.ReactElement) => ({
  ...render(<MemoryRouter>{component}</MemoryRouter>),
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';

it('Should contain the head', () => {
  const { getByText } = render(<Quote />);
  const head = getByText(/Math Magician/);
  expect(head).toBeInTheDocument();
});
it('Should contain the quote', () => {
  const { getByText } = render(<Quote />);
  const head = getByText(/Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. –William Paul Thurston/);
  expect(head).toBeInTheDocument();
});

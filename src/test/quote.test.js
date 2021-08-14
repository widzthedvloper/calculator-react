/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
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

it('renders home link correctly', () => {
  const tree = renderer
    .create(<h1>Math Magician</h1>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<p>Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. –William Paul Thurston</p>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

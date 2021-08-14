import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import App from '../components/App';

it('Should contain AC', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/AC/);
  expect(btn).toBeInTheDocument();
});

it('Should contain % sign', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/%/);
  expect(btn).toBeInTheDocument();
});

it('Should contain the number 1', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/1/);
  expect(btn).toBeInTheDocument();
});

it('Should contain the number 2', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/2/);
  expect(btn).toBeInTheDocument();
});

it('Should contain the number 3', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/3/);
  expect(btn).toBeInTheDocument();
});

it('Should contain the number 4', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/4/);
  expect(btn).toBeInTheDocument();
});

it('Should contain the number 5', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/5/);
  expect(btn).toBeInTheDocument();
});

it('Should contain the number 6', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/6/);
  expect(btn).toBeInTheDocument();
});

it('Should contain the number 7', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/7/);
  expect(btn).toBeInTheDocument();
});

it('Should contain the number 8', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/8/);
  expect(btn).toBeInTheDocument();
});

it('Should contain the number 9', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/9/);
  expect(btn).toBeInTheDocument();
});

it('Should contain the number 0', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/0/);
  expect(btn).toBeInTheDocument();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">AC</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">%</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">+/-</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">-</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">1</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">2</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">3</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">4</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">5</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">6</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">7</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">8</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">9</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<button type="button">0</button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

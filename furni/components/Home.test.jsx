import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

test('renders without crashing', () => {
  render(<div>Hello World</div>);
});

test('renders Home component', () => {
    render(<Home />);
    const linkElement = screen.getByText(/welcome to the home page/i);
    expect(linkElement).toBeInTheDocument();
});
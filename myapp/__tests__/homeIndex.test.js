import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index'; // Adjust the path if needed
import mockRouter from 'next-router-mock';

describe('Home', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });

  it('renders the Home component', () => {
    render(<Home />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('The current route is: "/"');
  });

  it('clicking the button updates the router', () => {
    render(<Home />);
    const button = screen.getByRole('button');
    expect(mockRouter).toMatchObject({
      asPath: '/',
      pathname: '/form',
      query: {},
    });

    // Simulate a button click
    button.click();

    expect(mockRouter).toMatchObject({
      asPath: '/foo?bar=baz',
      pathname: '/foo',
      query: { bar: 'baz' },
    });
  });
});

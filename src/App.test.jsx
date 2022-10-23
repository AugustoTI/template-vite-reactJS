import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('Should render correct', () => {
    render(<App />);

    const heading = screen.getByRole('heading', /Vite + React/i);

    expect(heading).toBeInTheDocument();
  });
});

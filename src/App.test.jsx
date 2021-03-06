import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('Should render correct', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello Vite + React!')).toBeInTheDocument();
  });
});

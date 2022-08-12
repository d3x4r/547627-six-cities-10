import { render, screen } from '@testing-library/react';
import { Spinner } from '.';

describe('Spinner test', () => {
  it('should render "Spinner"', async () => {
    render(<Spinner />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});

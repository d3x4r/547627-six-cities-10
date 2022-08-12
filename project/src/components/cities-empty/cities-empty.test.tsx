import { render, screen } from '@testing-library/react';
import { CitiesEmpty } from '.';
import { City } from '../../const';

describe('CitiesEmpty test', () => {

  it('should render "CitiesEmpty" with name prop', async () => {
    render(<CitiesEmpty name={City.Cologne} />);
    expect(screen.getByText(`We could not find any property available at the moment in ${City.Cologne}`)).toBeInTheDocument();
  });
});

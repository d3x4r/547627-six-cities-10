import { render, screen } from '@testing-library/react';
import { LocationsItem } from '.';

describe('LocationsItem test', () => {
  it('should render "LocationsItem" with name prop', async () => {
    const locationTestName = 'test-name';
    render(<LocationsItem name={locationTestName} />);
    expect(screen.getByText(locationTestName)).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HomeIcon } from '.';

describe('HomeIcon', () => {
  it('Should render the HomeIcon', () => {
    //given
    const result = render(<HomeIcon />);

    // then
    expect(result).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MenuIcon } from '.';

describe('MenuIcon', () => {
  it('Should render the MenuIcon', () => {
    //given
    const result = render(<MenuIcon />);

    // then
    expect(result).toMatchSnapshot();
  });
});

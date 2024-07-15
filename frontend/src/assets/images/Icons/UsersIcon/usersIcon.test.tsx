import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { UsersIcon } from '.';

describe('UsersIcon', () => {
  it('Should render the UsersIcon', () => {
    //given
    const result = render(<UsersIcon />);

    // then
    expect(result).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProfileIcon } from '.';

describe('ProfileIcon', () => {
  it('Should render the ProfileIcon', () => {
    //given
    const result = render(<ProfileIcon />);

    // then
    expect(result).toMatchSnapshot();
  });
});

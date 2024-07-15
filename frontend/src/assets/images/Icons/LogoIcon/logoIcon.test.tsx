import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LogoIcon } from '.';

describe('LogoIcon', () => {
  it('Should render the LogoIcon', () => {
    //given
    const result = render(<LogoIcon />);

    // then
    expect(result).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LogoTextIcon } from '.';

describe('LogoTextIcon', () => {
  it('Should render the LogoTextIcon', () => {
    //given
    const result = render(<LogoTextIcon />);

    // then
    expect(result).toMatchSnapshot();
  });
});

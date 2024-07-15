import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ExitIcon } from '.';

describe('ExitIcon', () => {
  it('Should render the ExitIcon component', () => {
    // given
    const result = render(<ExitIcon />);

    // then
    expect(result).toMatchSnapshot();
  });
});

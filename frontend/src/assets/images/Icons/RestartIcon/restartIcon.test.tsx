import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { RestartIcon } from '.';

describe('RestartIcon', () => {
  it('Should render the RestartIcon', () => {
    //given
    const result = render(<RestartIcon />);

    // then
    expect(result).toMatchSnapshot();
  });
});

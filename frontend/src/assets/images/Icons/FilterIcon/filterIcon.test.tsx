import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FilterIcon } from '.';

describe('FilterIcon', () => {
  it('Should render the FilterIcon component', () => {
    // given
    const result = render(<FilterIcon />);

    // then
    expect(result).toMatchSnapshot();
  });
});

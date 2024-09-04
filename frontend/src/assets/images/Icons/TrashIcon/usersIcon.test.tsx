import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TrashIcon } from '.';

describe('TrashIcon', () => {
  it('Should render the TrashIcon', () => {
    //given
    const result = render(<TrashIcon />);

    // then
    expect(result).toMatchSnapshot();
  });
});

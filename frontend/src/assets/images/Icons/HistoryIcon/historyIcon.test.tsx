import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HistoryIcon } from '.';

describe('HistoryIcon', () => {
  it('Should render the HistoryIcon', () => {
    //given
    const result = render(<HistoryIcon />);

    // then
    expect(result).toMatchSnapshot();
  });
});

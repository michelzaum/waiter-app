import { describe, expect, it } from 'vitest';
import { formatCurrency } from '.';

describe('formatCurrency', () => {
  it('Should format 123 number to R$ 123,00', () => {
    // given
    const value = 123;

    // when
    const result = formatCurrency(value)

    //then
    expect(result).toBe('R$ 123,00');
  });
});

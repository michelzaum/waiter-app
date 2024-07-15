import { describe, expect, it } from 'vitest';
import { useNavigationBar } from '../useNavigationBar';
import { act, renderHook } from '@testing-library/react';

describe('useNavigationBar', () => {
  it('Should be called with the link id', () => {
    // given
    const { result } = renderHook(() => useNavigationBar());
    const linkId = 1;

    // when
    act(() => result.current.handleActiveLink(linkId));

    // then
    expect(result.current.activeLink).toBe(linkId);
  });
});

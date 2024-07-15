import { describe, expect, it } from 'vitest';
import { useHeaderController } from './useHeaderController';
import { act, renderHook } from '@testing-library/react';

describe('useHeaderController', () => {
  describe('Restart day modal', () => {
    it('Should not starts with the modal opened', () => {
      // given
      const { result } = renderHook(() => useHeaderController());

      // then
      expect(result.current.isRestartDayModalOpen).toBeFalsy();
    });

    it('Should set isRestartDayModalOpen to true', () => {
      // given
      const { result } = renderHook(() => useHeaderController());

      // when
      act(() => result.current.openRestartDayModal());

      // then
      expect(result.current.isRestartDayModalOpen).toBeTruthy();
    });

    it('Should set isRestartModalOpen to false', () => {
      // given
      const { result } = renderHook(() => useHeaderController());

      // when
      act(() => result.current.closeRestartDayModal());

      // then
      expect(result.current.isRestartDayModalOpen).toBeFalsy();
    });
  })
});

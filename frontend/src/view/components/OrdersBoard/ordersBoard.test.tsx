import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useOrdersBoard } from "./useOrdersBoard";
import { Order } from "../../../types/Order";
import { act } from "react-dom/test-utils";

const orderMock: Order = {
  _id: '123',
  products: [],
  status: 'IN_PRODUCTION',
  table: '1',
};

describe('useOrdersBoard', () => {
  it('should set isModalVisible to true', () => {
    // given
    const { result } = renderHook(() => useOrdersBoard());

    // when
    act(() => result.current.handleOpenModal(orderMock));

    // then
    expect(result.current.isModalVisible).toBeTruthy();
  });

  it('should set isModalVisible to false', () => {
    // given
    const { result } = renderHook(() => useOrdersBoard());

    // when
    act(() => result.current.handleCloseModal());

    // then
    expect(result.current.isModalVisible).toBeFalsy();
  });
});


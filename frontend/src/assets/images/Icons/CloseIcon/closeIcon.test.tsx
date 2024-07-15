import { render } from '@testing-library/react';
import { describe, expect, it  } from "vitest";
import { CloseIcon } from '.';

describe("CloseIcon", async () => {
    it("Should render the CloseIcon component", async () => {
      // given
      const result = render(<CloseIcon />);

      // then
      expect(result).toMatchSnapshot();
    });
});

import { render } from '@testing-library/react';
import { describe, expect, it } from "vitest";
import { EditIcon } from '.';

describe("EditIcon", async () => {
    it("Should render the EditIcon component", async () => {
      // given
      const result = render(<EditIcon />);

      // then
      expect(result).toMatchSnapshot();
    });
});

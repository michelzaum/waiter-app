import { render } from '@testing-library/react';
import { describe, expect, it  } from "vitest";
import { App } from './App';

describe("App", async () => {
    it("Should render the App component", async () => {
      // given
      const result = render(<App />);

      // then
      expect(result).toMatchSnapshot();
    });
});

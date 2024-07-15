import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { renderApp } from '.';

describe('renderApp', () => {
  it('should render App component', () => {
    // given
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    // when
    renderApp(root);

    // then
    expect(document.getElementById('root')).toBeInTheDocument();
    document.body.removeChild(root);
  });
});

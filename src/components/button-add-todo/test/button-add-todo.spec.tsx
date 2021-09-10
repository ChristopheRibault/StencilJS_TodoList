import { newSpecPage } from '@stencil/core/testing';
import { ButtonAddTodo } from '../button-add-todo';

describe('button-add-todo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonAddTodo],
      html: `<button-add-todo></button-add-todo>`,
    });
    expect(page.root).toEqualHtml(`
      <button-add-todo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-add-todo>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { ListItem } from '../list-item';

describe('list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListItem],
      html: `<list-item></list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </list-item>
    `);
  });
});

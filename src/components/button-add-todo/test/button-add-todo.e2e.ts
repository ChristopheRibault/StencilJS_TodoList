import { newE2EPage } from '@stencil/core/testing';

describe('button-add-todo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-add-todo></button-add-todo>');

    const element = await page.find('button-add-todo');
    expect(element).toHaveClass('hydrated');
  });
});

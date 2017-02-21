import { Nn2Page } from './app.po';

describe('nn2 App', () => {
  let page: Nn2Page;

  beforeEach(() => {
    page = new Nn2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

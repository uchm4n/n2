import { GN2Page } from './app.po';

describe('g-n2 App', function() {
  let page: GN2Page;

  beforeEach(() => {
    page = new GN2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('g-n2 works!');
  });
});

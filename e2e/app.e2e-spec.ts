import { N2Page } from './app.po';

describe('n2 App', function() {
  let page: N2Page;

  beforeEach(() => {
    page = new N2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

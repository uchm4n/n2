import { N2Rc1Page } from './app.po';

describe('n2-rc1 App', function() {
  let page: N2Rc1Page;

  beforeEach(() => {
    page = new N2Rc1Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('n2-rc1 works!');
  });
});

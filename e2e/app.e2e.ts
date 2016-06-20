import { N2bPage } from './app.po';

describe('n2b App', function() {
  let page: N2bPage;

  beforeEach(() => {
    page = new N2bPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('n2b works!');
  });
});

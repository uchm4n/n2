import { NewNGPage } from './app.po';

describe('new-ng App', function() {
  let page: NewNGPage;

  beforeEach(() => {
    page = new NewNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

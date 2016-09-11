import { Rc6Page } from './app.po';

describe('rc6 App', function() {
  let page: Rc6Page;

  beforeEach(() => {
    page = new Rc6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

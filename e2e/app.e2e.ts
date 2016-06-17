<<<<<<< HEAD
import { GN2Page } from './app.po';

describe('g-n2 App', function() {
  let page: GN2Page;

  beforeEach(() => {
    page = new GN2Page();
=======
import { N2Rc1Page } from './app.po';

describe('n2-rc1 App', function() {
  let page: N2Rc1Page;

  beforeEach(() => {
    page = new N2Rc1Page();
>>>>>>> 90728a8d5c67dc28d6a6d815cf4c13af580eed2d
  })

  it('should display message saying app works', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('g-n2 works!');
=======
    expect(page.getParagraphText()).toEqual('n2-rc1 works!');
>>>>>>> 90728a8d5c67dc28d6a6d815cf4c13af580eed2d
  });
});

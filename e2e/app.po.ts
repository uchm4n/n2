<<<<<<< HEAD
export class GN2Page {
=======
export class N2Rc1Page {
>>>>>>> 90728a8d5c67dc28d6a6d815cf4c13af580eed2d
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
<<<<<<< HEAD
    return element(by.css('g-n2-app h1')).getText();
=======
    return element(by.css('n2-rc1-app h1')).getText();
>>>>>>> 90728a8d5c67dc28d6a6d815cf4c13af580eed2d
  }
}

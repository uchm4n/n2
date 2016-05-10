export class N2Rc1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('n2-rc1-app h1')).getText();
  }
}

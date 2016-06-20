export class N2bPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('n2b-app h1')).getText();
  }
}

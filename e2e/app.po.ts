export class GN2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('g-n2-app h1')).getText();
  }
}

<<<<<<< HEAD
import { browser, element, by } from 'protractor/globals';

export class Rc6Page {
=======
export class N2bPage {
>>>>>>> 0728e06de457b5f238b5f319e7f98e54303455a6
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
<<<<<<< HEAD
    return element(by.css('app-root h1')).getText();
=======
    return element(by.css('n2b-app h1')).getText();
>>>>>>> 0728e06de457b5f238b5f319e7f98e54303455a6
  }
}

import { AppPage } from './app.po';
import { element } from 'protractor';
import { browser, by } from 'protractor';

describe('App', () => {
  let page: AppPage;

  //---------------------------------------------------------------------------

  beforeAll(() => {
    page = new AppPage();
  });

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  afterEach(() => {
    browser.waitForAngularEnabled(true);
  });

  //---------------------------------------------------------------------------

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getMainHeading()).toEqual('HalfPipe U');
  });

  it('check if all skaters are present', () => {
    element.all(by.tagName('body')).getText().then((text) => {
      expect(text[0]).toContain('Rodney Mullen');
      expect(text[0]).toContain('Tony Hawk');
    });
  });

  xit('check if all actresses are present', () => {
    element.all(by.tagName('body')).getText().then((text) => {
      expect(text[0]).toContain('Sarah Michelle Gellar');
      expect(text[0]).toContain('Brie Larsson');
    });
  });
});

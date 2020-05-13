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
      expect(text[0]).toContain('Bam Margara');
      expect(text[0]).toContain('Bob Burnquist');
    });
  });

  it('check if all actresses are present', () => {
    element.all(by.tagName('body')).getText().then((text) => {
      expect(text[0]).toContain('Sarah Michelle Gellar');
      expect(text[0]).toContain('Liv Tyler');
      expect(text[0]).toContain('Brie Larsson');
    });
  });

  it('check if button is clickable', () => {
    element(by.buttonText('Invite')).click();
  });
});

import { AppPage } from './app.po';
import { element } from 'protractor';
import { browser, by } from 'protractor';

describe('HalfPipe - Common E2E', () => {
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

  it('getting resolution of current envireonment', () => {
    /*
    browser.getScreenOrientation().then((orientation) => {
      console.log("orientation = " + orientation);
    });
    */

    browser.manage().window().getSize().then((size) => {
      console.log("size.width = " + size.width);
      console.log("size.height = " + size.height);
      // JSON.stringify(size)
    });

    console.log('Resizing...');
    /*
    browser.manage().window().maximize().then(() => {
      console.log('Browser should be maximized.');
    });
    */
    browser.manage().window().setSize(1920, 1080);

    browser.manage().window().getSize().then((size) => {
      console.log("size.width = " + size.width);
      console.log("size.height = " + size.height);
      // JSON.stringify(size)
    });
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

  it('check version (should be the newest)', () => {
    element.all(by.tagName('body')).getText().then((text) => {
      expect(text[0]).toContain('44 should succeed');
      //expect(text[0]).toContain('23 + 1');
    });
  });

  it('should fail', () => {
    expect(true).toBeFalsy();
  });

  xit('should also fail', () => {
    expect(true).toBeFalsy();
  });
});

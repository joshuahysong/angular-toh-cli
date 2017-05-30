import { AngularTohCliPage } from './app.po';

describe('angular-toh-cli App', () => {
  let page: AngularTohCliPage;

  beforeEach(() => {
    page = new AngularTohCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

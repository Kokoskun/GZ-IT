import { GzItPage } from './app.po';

describe('gz-it App', () => {
  let page: GzItPage;

  beforeEach(() => {
    page = new GzItPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

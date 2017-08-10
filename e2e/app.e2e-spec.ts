import { WaxomPage } from './app.po';

describe('waxom App', () => {
  let page: WaxomPage;

  beforeEach(() => {
    page = new WaxomPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

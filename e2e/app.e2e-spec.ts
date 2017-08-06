import { BaseChatPage } from './app.po';

describe('base-chat App', () => {
  let page: BaseChatPage;

  beforeEach(() => {
    page = new BaseChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

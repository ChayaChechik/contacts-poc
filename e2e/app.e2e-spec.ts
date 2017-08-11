import { ContactsAppPage } from './app.po';

describe('contacts-app App', () => {
  let page: ContactsAppPage;

  beforeEach(() => {
    page = new ContactsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

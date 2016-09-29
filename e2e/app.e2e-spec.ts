import { AngularspPage } from './app.po';

describe('angularsp App', function() {
  let page: AngularspPage;

  beforeEach(() => {
    page = new AngularspPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

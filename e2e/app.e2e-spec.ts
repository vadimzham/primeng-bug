import { TestPrimengPage } from './app.po';

describe('test-primeng App', function() {
  let page: TestPrimengPage;

  beforeEach(() => {
    page = new TestPrimengPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

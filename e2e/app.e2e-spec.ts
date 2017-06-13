import { WeatherPage } from './app.po';

describe('weather App', () => {
  let page: WeatherPage;

  beforeEach(() => {
    page = new WeatherPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

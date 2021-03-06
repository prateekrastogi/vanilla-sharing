import faker from 'faker';

import gp from '../gp';

describe('gp', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should call without params', () => {
    gp();

    expect(window.open.mock.calls[0][0]).toBe('https://plus.google.com/share?');
  });

  it('should call with url', () => {
    const fixture = faker.internet.url();

    gp({ url: fixture });

    expect(window.open.mock.calls[0][0]).toBe(`https://plus.google.com/share?url=${encodeURIComponent(fixture)}`);
  });
});

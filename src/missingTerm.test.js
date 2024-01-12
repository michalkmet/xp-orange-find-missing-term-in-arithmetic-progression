const missingTerm = require('./missingTerm');

describe('hello', () => {
  it('should return hello', () => {
    expect(missingTerm()).toBe('hello');
  });
});

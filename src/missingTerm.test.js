const missingTerm = require('./missingTerm');

describe('User Story 1: List with 3 numbers', () => {
  it('UAT1.1 When I pass [0, 1, 3] then I should see 2', () => {
    expect(missingTerm([0, 1, 3])).toBe(2);
  });
  it('UAT1.2: When I pass [1, 5, 7] then I should see 3', () => {
    expect(missingTerm([1, 5, 7])).toBe(3);
  });
  it('UAT1.3: When I pass [1, 4, 10] then I should see 7', () => {
    expect(missingTerm([1, 4, 10])).toBe(7);
  });
});

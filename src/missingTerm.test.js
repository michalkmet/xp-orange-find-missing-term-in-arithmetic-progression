const missingTerm = require('./missingTerm');

describe('User Story 1: List with 3 numbers', () => {
  it('UAT1.1 When I pass [1, 2, 4] then I should see 3', () => {
    expect(missingTerm([1, 2, 4])).toBe(3);
  });
  it('UAT1.2: When I pass [1, 5, 7] then I should see 3', () => {
    expect(missingTerm([1, 5, 7])).toBe(3);
  });
  it('UAT1.3: When I pass [1, 4, 10] then I should see 7', () => {
    expect(missingTerm([1, 4, 10])).toBe(7);
  });
  it('UAT1.4: When I pass [1, 3, 4] then I should see 2', () => {
    expect(missingTerm([1, 3, 4])).toBe(2);
  });
});

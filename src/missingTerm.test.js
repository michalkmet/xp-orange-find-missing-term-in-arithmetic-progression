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

describe('User Story 2: List with 4 numbers', () => {
  it('UAT2.1 When I pass [2, 3, 4, 6] then I should see 5', () => {
    expect(missingTerm([2, 3, 4, 6])).toBe(5);
  });
  it('UAT2.2 When I pass [2, 4, 6, 10] then I should see 8', () => {
    expect(missingTerm([2, 4, 6, 10])).toBe(8);
  });
  it('UAT2.3 When I pass [1, 4, 7, 13] then I should see 10', () => {
    expect(missingTerm([1, 4, 7, 13])).toBe(10);
  });
  it('UAT2.4 When I pass [1, 2, 3, 5] then I should see 4', () => {
    expect(missingTerm([1, 2, 3, 5])).toBe(4);
  });
});

describe('User Story 3: List with 5 numbers', () => {
  it('UAT3.1 When I pass [1, 3, 5, 9, 11] then I should see 7', () => {
    expect(missingTerm([1, 3, 5, 9, 11])).toBe(7);
  });
  it('UAT3.2 When I pass [1, 3, 7, 9, 11, 14] then I should see 5', () => {
    expect(missingTerm([1, 3, 7, 9, 11, 14])).toBe(5);
  });
});

describe('User Story 4: List with negative numbers', () => {
  it('UAT4.1 When I pass [-4, -3, -1] then I should see -2', () => {
    expect(missingTerm([-4, -3, -1])).toBe(-2);
  });
  it('UAT4.2 When I pass [-8, -4, -2] then I should see -6', () => {
    expect(missingTerm([-8, -4, -2])).toBe(-6);
  });
  it('UAT4.3 When I pass [-13, -10 , -7, -1] then I should see -4', () => {
    expect(missingTerm([-13, -10, -7, -1])).toBe(-4);
  });
});

describe('User Story 5: List with negative numbers and positive numbers', () => {
  it('UAT5.1 When I pass [-1, 0, 2] then I should see 1', () => {
    expect(missingTerm([-1, 0, 2])).toBe(1);
  });
  it('UAT5.2 When I pass [-2, 0, 4] then I should see 2', () => {
    expect(missingTerm([-2, 0, 4])).toBe(2);
  });
  it('UAT5.3 When I pass [-2, -1, 1] then I should see 0', () => {
    expect(missingTerm([-2, -1, 1])).toBe(0);
  });
  it('UAT5.4 When I pass [-8, 0, 4] then I should see -4', () => {
    expect(missingTerm([-8, 0, 4])).toBe(-4);
  });
});

describe('User Story 6: List with large negative numbers', () => {
  it('UAT6.1 When I pass [-6, -20, -27] then I should see -13', () => {
    expect(missingTerm([-6, -20, -27])).toBe(-13);
  });
});

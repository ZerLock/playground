// sayHello.tests.ts
import { describe, it, expect } from '@jest/globals';

import sayHello from '../src/hello';

describe('Test sayHello function', () => {
  it('Call function', () => {
    expect(sayHello()).toBe('Hello world!');
  });
});

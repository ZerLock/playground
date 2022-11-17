// encrypt.tests.ts
import { describe, it, expect } from '@jest/globals';

import { encryptText, decryptText } from '../src/lib/encrypt';

describe('Test encrypt functions', () => {
  const ENCRYPT_KEY = 'mysecretkey';
  const INITIAL_TEXT = 'Hello world!';

  it('Encrypt and decrypt text', () => {
    expect(
      decryptText(
        encryptText(INITIAL_TEXT, ENCRYPT_KEY),
        ENCRYPT_KEY,
      ),
    ).toBe(INITIAL_TEXT);
  });
});

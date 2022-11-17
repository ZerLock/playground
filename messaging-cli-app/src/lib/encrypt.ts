import CryptoJS from 'crypto-js';

export const encryptText = (text: string, passphrase: string): string => {
  const encrypted = CryptoJS.AES.encrypt(text, passphrase).toString();
  return encrypted;
};

export const decryptText = (text: string, passphrase: string): string => {
  const bytes = CryptoJS.AES.decrypt(text, passphrase);
  return bytes.toString(CryptoJS.enc.Utf8);
};

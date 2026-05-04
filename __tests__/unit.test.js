// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {

  test('parenthesis around area code', () => {
    expect(isPhoneNumber('(413) 231-2122')).toBe(true);
  });

  test('only dashes', () => {
    expect(isPhoneNumber('413-231-2122')).toBe(true);
  });

  test('no dashes', () => {
    expect(isPhoneNumber('413 231 2122')).toBe(false);
  });

  test('non-digit', () => {
    expect(isPhoneNumber('413 -23I-2122')).toBe(false);
  });

});

describe('isEmail', () => {

  test('two char after .', () => {
    expect(isEmail('boomshakalaka@okbro.co')).toBe(true);
  });

  test('all caps', () => {
    expect(isEmail('HELLOWORLD@ME.ORG')).toBe(true);
  });

  test('no ID', () => {
    expect(isEmail('@gmail.com')).toBe(false);
  });

  test('dot in ID', () => {
    expect(isEmail('name.jeff@gmail.com')).toBe(false);
  });

});

describe('isStrongPassword', () => {

  test('length 15', () => {
    expect(isStrongPassword('Hello1234567890')).toBe(true);
  });

  test('length 4', () => {
    expect(isStrongPassword('Hello1234567890')).toBe(true);
  });

  test('length 16', () => {
    expect(isStrongPassword('Super12345678901')).toBe(false);
  });

  test('length 2', () => {
    expect(isStrongPassword('Hi')).toBe(false);
  });

});

describe('isDate', () => {

  test('2 digit month', () => {
    expect(isDate('01/25/2023')).toBe(true);
  });

  test('1 digit month', () => {
    expect(isDate('1/25/2023')).toBe(true);
  });

  test('2 digit year', () => {
    expect(isDate('01/25/23')).toBe(false);
  });

  test('3 digit month', () => {
    expect(isDate('001/25/2023')).toBe(false);
  });

});

describe('isHexColor', () => {

  test('3 digit', () => {
    expect(isHexColor('f1f')).toBe(true);
  });

  test('6 digit', () => {
    expect(isHexColor('f12fe4')).toBe(true);
  });

  test('7 digit', () => {
    expect(isHexColor('f34ef21')).toBe(false);
  });

  test('g in hex', () => {
    expect(isHexColor('f4efg1')).toBe(false);
  });

});


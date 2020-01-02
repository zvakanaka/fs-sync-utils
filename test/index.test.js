const { read, write, exists, remove } = require('../index');

const TEST_FILE_NAME = 'test/removeThenReplaceMeWithTest';
const TEST_FILE_CONTENTS = 'this file is removed with a test, then replaced by a later test\n';

test('To read a file', () => {
  expect(read(TEST_FILE_NAME)).toBe(TEST_FILE_CONTENTS);
});

test('To make sure a file exists', () => {
  expect(exists(TEST_FILE_NAME)).toBe(true);
});

test('To make sure a file does not exist', () => {
  expect(exists('nonsenseFileName')).toBe(false);
});

test('To remove a file', () => {
  remove(TEST_FILE_NAME);
  expect(exists(TEST_FILE_NAME)).toBe(false);
});

test('To write a file', () => {
  write(TEST_FILE_NAME, TEST_FILE_CONTENTS);
  expect(read(TEST_FILE_NAME)).toBe(TEST_FILE_CONTENTS);
});

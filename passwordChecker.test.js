const isValidPassword = require('./passwordChecker');

test('password with less than 8 characters should be invalid', () => {
    expect(isValidPassword('WOOGI11')).toBe(false);
});

test('password without without special characters should be invalid', () => {
    expect(isValidPassword('WOOGI11')).toBe(false);
});

test('password without number should be invalid', () => {
    expect(isValidPassword('WOOGIYUQI')).toBe(false);
})

test('password that contain ipl should be invalid', () => {
    expect(isValidPassword('WOOGIIPL')).toBe(false);
});

test('password without any fail should be valid', () => {
    expect(isValidPassword('WOOGI115!')).toBe(true);
});
const { login, createUser, changePassword, users } = require('../src/auth');

beforeEach(() => {
  users.length = 0;
  users.push({ username: 'admin', password: 'Admin123' });
});

describe('Login function', () => {
  test('Login with valid credentials', () => {
    expect(login('admin', 'Admin123')).toBe(true);
  });

  test('Login with invalid password', () => {
    expect(login('admin', 'WrongPass')).toBe('Hiba: hibás jelszó');
  });
});

describe('CreateUser function', () => {
  test('Create user with valid data', () => {
    const result = createUser('newuser', 'Newpass1');
    expect(result.username).toBe('newuser');
  });

  test('Fail if username exists', () => {
    createUser('admin', 'Newpass1');
    const result = createUser('admin', 'Newpass1');
    expect(result).toBe('Hiba: a felhasználónév már létezik');
  });

  test('Fail if password is weak', () => {
    const result = createUser('user2', 'weak');
    expect(result).toMatch(/jelszónak legalább 8 karakter/);
  });
});

describe('ChangePassword function', () => {
  test('Change password successfully', () => {
    const result = changePassword('admin', 'Admin123', 'Strong123');
    expect(result).toBe(true);
  });

  test('Fail if old password is wrong', () => {
    const result = changePassword('admin', 'WrongPass', 'Strong123');
    expect(result).toBe('Hiba: a régi jelszó hibás');
  });
});
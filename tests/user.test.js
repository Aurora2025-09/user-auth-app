const User = require('../src/user');

describe('User osztály tesztek', () => {
  test('Felhasználó helyes létrehozása', () => {
    const user = new User('tesztuser', 'Teszt123');
    expect(user.username).toBe('tesztuser');
    expect(user.password).toBe('Teszt123');
  });

  test('Felhasználó tulajdonságok elérhetők', () => {
    const user = new User('admin', 'Admin123');
    expect(Object.keys(user)).toEqual(['username', 'password']);
  });
});
const User = require('./user');

const users = [
  new User('admin', 'Admin123'),
  new User('tesztelo', 'Test1234'),
];

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

function login(username, password) {
  if (!username || !password) {
    return 'Hiba: felhasználónév és jelszó megadása kötelező';
  }
  const user = users.find(u => u.username === username);
  if (!user) {
    return 'Hiba: felhasználó nem található';
  }
  if (user.password !== password) {
    return 'Hiba: hibás jelszó';
  }
  return true;
}

function createUser(username, password) {
  if (users.find(u => u.username === username)) {
    return 'Hiba: a felhasználónév már létezik';
  }
  if (!passwordRegex.test(password)) {
    return 'Hiba: a jelszónak legalább 8 karakterből kell állnia, tartalmaznia kell egy nagybetűt és egy számot';
  }
  const newUser = new User(username, password);
  users.push(newUser);
  return newUser;
}

function changePassword(username, oldPassword, newPassword) {
  const user = users.find(u => u.username === username);
  if (!user) {
    return 'Hiba: felhasználó nem található';
  }
  if (user.password !== oldPassword) {
    return 'Hiba: a régi jelszó hibás';
  }
  if (oldPassword === newPassword) {
    return 'Hiba: az új jelszó nem egyezhet meg a régivel';
  }
  if (!passwordRegex.test(newPassword)) {
    return 'Hiba: az új jelszó nem felel meg a biztonsági követelményeknek';
  }
  user.password = newPassword;
  return true;
}

module.exports = { login, createUser, changePassword, users };
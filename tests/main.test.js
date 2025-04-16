const { login, createUser, changePassword, users } = require("../src/auth");

describe("Main menu funkcionalitás (közvetve)", () => {
  beforeEach(() => {
    users.length = 0;
    users.push({ username: "teszt", password: "Teszt1234" });
  });

  test("Sikeres bejelentkezés", () => {
    const result = login("teszt", "Teszt1234");
    expect(result).toBe(true);
  });
  test("Sikertelen bejelentkezés hibás jelszóval", () => {
    const result = login("teszt", "rossz", users);
    expect(result).toMatch(/hiba/i);
  });

  test("Új felhasználó létrehozása helyes adatokkal", () => {
    const result = createUser("ujuser", "UjJelszo1", users);
    expect(result).toEqual({ username: "ujuser", password: "UjJelszo1" });
  });

  test("Jelszó módosítása helyes adatokkal", () => {
    const result = changePassword("teszt", "Teszt1234", "UjJelszo1", users);
    expect(result).toBe(true);
  });

  test("Jelszó módosítás hibás régi jelszóval", () => {
    const result = changePassword("teszt", "rossz", "UjJelszo1", users);
    expect(result).toMatch(/hiba/i);
  });
});

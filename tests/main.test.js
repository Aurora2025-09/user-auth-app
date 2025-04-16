import * as auth from "../src/auth";
import * as user from "../src/user";

describe("Main logic", () => {
  test("Bejelentkezés meghívása működik", () => {
    const users = [{ username: "test", password: "Test1234" }];
    const result = auth.login("test", "Test1234", users);
    expect(result).toBe(true);
  });

  test("Új felhasználó létrehozása hibás jelszóval", () => {
    const users = [];
    const result = user.createUser("newuser", "short", users);
    expect(result).toMatch(/hiba/i);
  });
});
const readline = require('readline');
const { login, createUser, changePassword } = require('./auth');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log('\n1. Bejelentkezés');
  console.log('2. Új felhasználó létrehozása');
  console.log('3. Jelszó megváltoztatása');
  console.log('4. Kilépés');
  rl.question('Válassz egy lehetőséget: ', option => {
    switch (option) {
      case '1':
        rl.question('Felhasználónév: ', user =>
          rl.question('Jelszó: ', pass => {
            console.log(login(user, pass));
            menu();
          })
        );
        break;
      case '2':
        rl.question('Új felhasználónév: ', user =>
          rl.question('Jelszó: ', pass => {
            console.log(createUser(user, pass));
            menu();
          })
        );
        break;
      case '3':
        rl.question('Felhasználónév: ', user =>
          rl.question('Régi jelszó: ', oldPass =>
            rl.question('Új jelszó: ', newPass => {
              console.log(changePassword(user, oldPass, newPass));
              menu();
            })
          )
        );
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Érvénytelen opció');
        menu();
    }
  });
}

menu();
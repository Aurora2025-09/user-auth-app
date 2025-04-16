Kommentar:

node_modules = ingen laddning behövs

.gitignore = ja, det är viktigt att inkludera det

npm install = detta återskapar de nödvändiga paketen lokalt


Beskrivning: Du ska skapa en Node.js-applikation som innehåller en funktionalitet för inloggning. User skall kunna logga in som en användare, samt också kunna skapa en ny användare. Det skall också finnas en funktion för att ändra lösenord på en användare.

Dessa funktioner skall ligga i moduler i Node.js och importeras in till ett huvudskript. Data över användares username och passwords som finns i applikationen, samt dess struktur, bestämmer ni själva. 

3 funktioner skall ha följande krav:

Funktion för inloggning:

• Funktionen tar in 2 st parametrar; username och password
• Funktionen ska returnera True om username och password båda matchar ett befintligt värde.
• Funktioner returnerar error-meddelande om lösenordet eller username är felaktigt eller saknas

Funktion för att skapa ny användare:

• Funktionen tar in 2st parametrar; username och password.
• Om username matchar ett redan befintligt username, returnera error meddelande utan att skapa ett ny user
• Om password inte uppfyller säkerhetskrav (minst 8 tecken, en siffra, en stor bokstav etc), returnera error meddelande utan att skapa ett ny user. Tips, använd ett Regex expression för detta.
• Om både username och password är korrekt, returnera det nya user-objektet

Funktion för att ändra lösenord på användare:

• Funktionen tar in 3st parametrar; user, oldPassword och nyttPassword
• Kontrollera att user finns. Om inte, returnera error meddelande utan att ändra lösenord på user
• Om oldPassword inte stämmer överens med det nuvarande lösenordet, returnera error meddelande utan att ändra lösenord på user
• Om oldPassword och nyttPassword är identiskt, returnera error meddelande utan att ändra lösenord på user
• Om nyttPassword inte uppfyller samma säkerhetsregler som i att skpa en ny användare, returnera error meddelande utan att ändra lösenord på user
• Om alla ovanstående krav uppfylls, password på user uppdateras till det nya värdet. Returnera True

Krav för huvud-scriptet:

• Skapa ett exekverbart huvud-script där användaren kan välja att skapa ny användare, logga in, samt ändra sitt lösenord. (Inloggning i detta fall leder inte till någon ny vy eller hemsida etc. Bara ett test-meddelande output som säger att man har loggat in.)
• Använd en SwitchCase för att bygga upp en huvud-meny för användaren där dessa 3 alternativ finns tillgängliga, samt ett alternativ för att avsluta.
• När scriptet startas så bör ett antal användare skapas i bakgrunden. Gör detta via antingen anrop till en UserKlass för att skapa objekt eller att data hämtas från en extern textfil, eller JSON-fil eller något liknande. Tänk på att det ska vara exekverbartpå localhost utan Internet, så ingen koppling till online DB, till exempel.

Krav för era tester:

• Skapa 3st test-klasser, en för varje funktion-modul, och skriv Unit-tester som testar varje punkt.
• Tänk på att skriva minst 2 tester för varje krav, för att vara säkra på att kravet är implementerat och fungerar med olika parameter-värden.
• Överväg att inkludera en BeforeEach metod i era testklasser, för att återställa miljön mellan era tester.

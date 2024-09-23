class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  whoIsBigger(user) {
    if (this.age > user.age) {
      console.log("l'utente " + this.firstName + " è più grande dell' utente " + user.firstName);
    } else {
      console.log("l'utente " + user.firstName + " è più grande dell' utente " + this.firstName);
    }
  }
}

const marco = new User("Marco", "Cipolletta", 26, "Marche");
const luigi = new User("Luigi", "Rossi", 55, "Liguria");
const riccardo = new User("Riccardo", "Verdi", 21, "Toscana");

marco.whoIsBigger(luigi);
riccardo.whoIsBigger(marco);

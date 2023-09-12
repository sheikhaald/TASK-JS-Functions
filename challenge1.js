/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
let user = "sheikha";
function printName(name) {
  console.log(`my name is ${name}`);
}
printName(user);

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(year) {
  console.log(2023 - year);
}
printAge(1998);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  if (language == "en") {
    console.log(`hello ${name}`);
  } else if (language == "es") {
    console.log(`hola ${name}`);
  } else if (language == "fr") {
    console.log(`bonjour ${name}`);
  } else if (language == "tr") {
    console.log(`merhaba ${name}`);
  } else {
    console.log("don't know this lang");
  }
}
printHello("sheikha", "en");

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(x, y) {
  if (x > y) {
    console.log(x);
  } else {
    console.log(y);
  }
}
printMax(5, 7);

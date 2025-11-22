function greet() {
  console.log("Hello!");
}

greet();

function greet1(name) {
  console.log(`Hello! ${name}`);
}

greet1("Nishant");

function greet2(name) {
  if (!name) console.log("Hii there!");
  else console.log(`Hello! ${name}`);
}

greet2();
greet2("Nisi");

function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(convertToFahrenheit(25));

function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(convertToCelsius(86));

function convertTemperature(degree, unit) {
  return (convertedTemp =
    unit === "C"
      ? convertToFahrenheit(degree) + "F"
      : convertToCelsius(degree) + "C");
}

console.log(convertTemperature(25, "C"));
console.log(convertTemperature(86, "F"));

function convertLength(length, from, to) {
  let convertedLength;
  if (from !== "km" && from !== "miles" && from !== "ft")
    convertedLength = `invalid unit: ${from}`;
  else if (to !== "km" && to !== "miles" && to !== "ft")
    convertedLength = `invalid unit: ${to}`;
  else if (from === to) {
    convertedLength = length + " " + from;
  } else {
    if (from === "miles") {
      convertedLength =
        to === "km" ? length * 1.6 + " km" : length * 5280 + " ft";
    } else {
      convertedLength =
        to === "miles" ? length / 1.6 + " miles" : length * 3281 + " ft";
    }
  }
  return convertedLength;
}

console.log(convertLength(50, "miles", "km")); // 80 km
console.log(convertLength(32, "km", "miles")); // 20 mile
console.log(convertLength(50, "km", "km")); // 50 km
console.log(convertLength(5, "miles", "ft")); // 26400 ft
console.log(convertLength(5, "km", "ft")); // 16405 ft
console.log(convertLength(5, "ft", "ft")); // 5 ft
console.log(convertLength(5, "lbs", "km")); // invalid unit: lbs
console.log(convertLength(5, "miles", "lbs")); //  invalid unit: lbs
console.log(convertLength(5, "cm", "ft")); // invalid unit: cm
console.log(convertLength(5, "lbs", "lbs")); // invalid unit: lbs

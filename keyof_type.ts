import { publication2, rodrigo } from "./data";
import { User } from "./models";

const email = rodrigo["email"];
console.log("email:", email);

function getProperty<T>(value: T, key: keyof T) {
  return value[key];
}

console.log(getProperty(publication2, "description"));

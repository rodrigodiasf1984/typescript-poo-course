import { User } from "./models";

// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type
type UserPreview = Pick<User, "firstName" | "lastName" | "profileImageURL">;

const user: UserPreview = {
  firstName: "John",
  lastName: "Doe",
  profileImageURL: "http://example.com/profile.jpg",
};

console.log(user, "User Preview");

// Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). The opposite of Pick.

type UserForm = Omit<User, "age" | "profileImageURL">;

const newUser: UserForm = {
  firstName: "Jane",
  lastName: "Smith",
  email: "example@gmail.com",
};

console.log(newUser, "User Form");

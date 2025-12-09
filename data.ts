import { Publication, User } from "./models";

export const lucas: User = {
  firstName: "Lucas",
  lastName: "Garcez",
  email: "lucas@coffstack.com",
  age: 32,
  profileImageURL: "http://example.com/lucas.jpg",
};

export const rodrigo: User = {
  firstName: "Rodrigo",
  lastName: "Dias",
  email: "rodrigodiasf@gmail.com",
  age: 42,
  profileImageURL: "http://example.com/rodrigo.jpg",
};

export const users: User[] = [lucas, rodrigo];

export const publications: Publication[] = [
  {
    imageURL: "fake-url-1",
    description: "description 1",
    author: lucas,
  },
  {
    imageURL: "fake-url-2",
    description: "description 2",
    author: rodrigo,
  },
  {
    imageURL: "fake-url-3",
    description: "description 3",
    author: lucas,
  },
];

export const publication2: Publication = {
  imageURL: "fake-url-2",
  description: "description 2",
  author: rodrigo,
};

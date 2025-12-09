export interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  profileImageURL: string;
}

export interface Publication {
  imageURL: string;
  description: string;
  author: User;
}

export interface EnvVariable {
  nameDatabase: string;
  password: string;
}

export interface User {
  name: string;
  nickname: string;
  email: string;
  picture: string;
}

export interface Products {
  title: string;
  description: string;
  video: string;
  user: string;
  haskTags: string;
  comments: string;
  likes: string;
  shares: string;
}

export interface Comment {
  content: string;
  user: string;
  products: string;
}

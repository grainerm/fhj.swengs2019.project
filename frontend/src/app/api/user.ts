export interface User {
  id?: number;
  username: string;
  password: string;
  band: any;
  admin: boolean;
}

export interface Band {
  id?: number;
  name: string;
}

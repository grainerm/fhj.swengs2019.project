export interface Actor {
  id?: number;
  firstName: string;
  lastName: string;
  rating?: number;
  movies?: Array<any>;
  dayOfBirth?: Date;
}

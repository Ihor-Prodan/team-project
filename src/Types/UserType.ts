import { BookWorkout } from './BookWorcouts';
import { CardData } from './CardData';
import { Membership } from './Membership';

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userId: number;
  membership: Membership;
  dataCard: CardData;
  workouts: BookWorkout[];
};

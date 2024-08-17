import { BookWorkout } from './BookWorcouts';
import { CardData } from './CardData';
import { Membership } from './Membership';

export type User = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  userId: number;
  membership: Membership;
  workouts: BookWorkout[];
  dataCard: CardData;
};

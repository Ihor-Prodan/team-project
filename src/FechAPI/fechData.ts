import axios from 'axios';
import { UserType } from '../Types/UserType';
import { CardData } from '../Types/CardData';
import { BookWorkout } from '../Types/BookWorcouts';
import { Training } from '../Types/TrainingsType';
import { Workouts } from '../Types/WorkoutsType';
import { Trainers } from '../Types/TrainerType';
import { Membership } from '../Types/Membership';

axios.defaults.baseURL =
  'https://pulse-gym-servernode-production.up.railway.app';

export function getTrainers(): Promise<Trainers[]> {
  return axios.get('/trainers').then((res: { data: Trainers[] }) => res.data);
}

export function getTrainersById(trainerId: string): Promise<Trainers> {
  return axios
    .get(`/trainers/${trainerId}`)
    .then((res: { data: Trainers }) => res.data);
}

export function getAllWorkouts(): Promise<Workouts[]> {
  return axios.get('/workouts').then((res: { data: Workouts[] }) => res.data);
}

export function getWorkoutById(workoutId: string): Promise<Workouts> {
  return axios
    .get(`/workouts/${workoutId}`)
    .then((res: { data: Workouts }) => res.data);
}

export function getAllTrainings(): Promise<Training[]> {
  return axios.get('/trainings').then((res: { data: Training[] }) => res.data);
}

export function getTrainingById(trainingId: string): Promise<Training> {
  return axios
    .get(`/trainings/${trainingId}`)
    .then((res: { data: Training }) => res.data);
}

export async function getRegistrUser(newUser: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): Promise<{ user: UserType; token: string }> {
  const response = await axios.post('/auth/register', newUser);
  const { user, token } = response.data;

  return { user, token };
}

export async function getLoginUser(loginUser: {
  email: string;
  password: string;
}): Promise<{ user: UserType; token: string }> {
  const response = await axios.post('/auth/login', loginUser);
  const { user, token } = response.data;

  return { user, token };
}

export const getUserById = async (userId: number) => {
  try {
    const response = await axios.get(`/auth/find-user/${userId}`);
    const { user, token } = response.data;

    return { user, token };
  } catch (error) {
    throw error;
  }
};

export async function getUpdateUser(updUser: {
  firstName: string;
  lastName: string;
  email: string;
  userId: number;
}): Promise<{ user: UserType; token: string }> {
  const response = await axios.put('/user/update', updUser);

  return response.data;
}

export async function createMembership(
  membership: Membership,
): Promise<Membership> {
  const response = await axios.post('/membership', membership);

  return response.data;
}

export async function createCardData(cardData: CardData): Promise<CardData> {
  const response = await axios.post('/card-data', cardData);

  return response.data;
}

export async function updateCardData(cardData: {
  cardNumber: string;
  date: string;
  cvv: string;
  phoneNumber: string;
  userId: number;
}): Promise<CardData> {
  const response = await axios.put('/card/update', cardData);

  return response.data;
}

export async function getBookWorkout(
  booking: BookWorkout,
): Promise<BookWorkout> {
  const response = await axios.post('/booking', booking);

  return response.data;
}

export async function getRemoveWorkout(
  workoutId: string,
  userId: number,
): Promise<void> {
  await axios.delete(`/trainings/remove/${workoutId}`, {
    data: { userId },
  });
}

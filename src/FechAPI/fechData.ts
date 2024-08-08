import axios from 'axios';
import { Trainers } from '../Components/Redux/Slices/Trainers';
import { Workouts } from '../Components/Redux/Slices/Workouts';
import { Training } from '../Components/Timetable/Helpers/timetableData';
import { UserType } from '../Types/UserType';

axios.defaults.baseURL = 'http://localhost:8080';

export function getTrainers(): Promise<Trainers> {
  return axios.get('/trainers').then((res: { data: Trainers }) => res.data);
}

export function getTrainersById(trainerId: string): Promise<Trainers> {
  return axios
    .get(`/trainers/${trainerId}`)
    .then((res: { data: Trainers }) => res.data);
}

export function getAllWorkouts(): Promise<Workouts> {
  return axios.get('/workouts').then((res: { data: Workouts }) => res.data);
}

export function getWorkoutById(workoutId: string): Promise<Workouts> {
  return axios
    .get(`/workouts/${workoutId}`)
    .then((res: { data: Workouts }) => res.data);
}

export function getAllTrainings(): Promise<Training> {
  return axios.get('/trainings').then((res: { data: Training }) => res.data);
}

export function getTrainingById(trainingId: string): Promise<Training> {
  return axios
    .get(`/trainings/${trainingId}`)
    .then((res: { data: Training }) => res.data);
}

export async function registrUser(newUser: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): Promise<UserType> {
  const response = await axios.post('/auth/register', newUser);

  return response.data;
}

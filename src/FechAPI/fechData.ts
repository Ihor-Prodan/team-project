import axios from 'axios';
import { User } from '../Components/Redux/Slices/User';
import { Trainers } from '../Components/Redux/Slices/Trainers';
import { Workouts } from '../Components/Redux/Slices/Workouts';

axios.defaults.baseURL = 'http://localhost:8080/';

export function getTrainers(): Promise<Trainers> {
  return axios.get('/couch').then((res: { data: Trainers }) => res.data);
}

export function getWorkout(): Promise<Workouts> {
  return axios.get('/webinars').then((res: { data: Workouts }) => res.data);
}

export async function getUser(userId: string): Promise<User> {
  const response = await axios.get(`/users/${userId}`);

  return response.data;
}

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

// export async function addNewUser(newUser: {
//   firstName: string;
//   lastName: string;
//   fullName: string;
//   id: string;
//   email: string;
//   status: boolean;
//   createdAt: Date;
//   updatedAt: Date;
//   phoneNumber: string;
//   password: string;
//   termsAccepted: boolean;
// }): Promise<UserType> {
//   const response = await axios.post('/users', newUser);

//   return response.data;
// }

// export async function addNewMessage(newMessage: {
//   messageId: string;
//   userId: string;
//   receiverId: string;
//   text: string;
//   timestamp: number;
// }): Promise<Message> {
//   const response = await axios.post('/messages', newMessage);

//   return response.data;
// }

// export async function updateUser(user: UserType): Promise<UserType> {
//   const { firstName, lastName, avatar, id } = user;

//   const response = await axios.put(`/users/${id}`, {
//     firstName,
//     lastName,
//     avatar,
//   });

//   return response.data;
// }

// export const loginUser = async (email: string, password: string) => {
//   const response = await fetch('http://localhost:3005/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   if (!response.ok) {
//     throw new Error('Login failed');
//   }

//   const data = await response.json();

//   return data;
// };

// export async function updateMessage(message: Message): Promise<Message> {
//   const { messageId, text, timestamp } = message;

//   const response = await axios.put(`/messages/${messageId}`, {
//     text,
//     timestamp,
//   });

//   return response.data;
// }

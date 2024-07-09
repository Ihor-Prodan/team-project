export const pricesCard = [
  {
    duration: '3',
    slogan: 'Commit to a healthier you',
    access: 'Gym Access',
    unlimited: 'Unlimited Group Classes',
    locker: 'Locker Room Facilities',
    giveOne: '1 Free Trainer-Led Workout',
    price: '10 000 ₴',
    best: false,
    date: '',
  },
  {
    duration: '6',
    slogan: 'Explore our gym to see if it fits',
    access: 'Gym Access',
    unlimited: 'Unlimited Group Classes',
    locker: 'Locker Room Facilities',
    giveOne: '1 Free Trainer-Led Workout',
    giveThree: '1 Trial Day Gym Access',
    giveTwo: '1 Trial Group Class',
    price: '18 000 ₴',
    best: false,
    date: '',
  },
  {
    duration: '12',
    slogan: 'Embrace a long-term fitness lifestyle',
    access: 'Gym Access',
    unlimited: 'Unlimited Group Classes',
    locker: 'Locker Room Facilities',
    giveOne: '1 Free Trainer-Led Workout',
    giveTwo: '2 Trial Group Classes',
    giveThree: '2 Trial Days Gym Access',
    price: '30 000 ₴',
    best: true,
    date: '',
  },
];

export type Membership = {
  duration: string;
  slogan: string;
  access: string;
  unlimited: string;
  locker: string;
  date?: string;
  giveOne: string;
  giveTwo?: string;
  giveThree?: string;
  price: string;
  best: boolean;
};

export default pricesCard;

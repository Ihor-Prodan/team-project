export const studio = [
  'Flex studio',
  'Mind studio',
  'Cycle studio',
  'Cardio studio',
  'Power studio',
];

export const times = [
  '7:00',
  '8:00',
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
];

export type Class = {
  time: string;
  studio: string;
  name: string;
  trainer: string;
  id: string;
  location?: string;
  date: string;
};

export const timetable = [
  {
    time: '7:00 - 8:00',
    classes: [
      {
        time: '7:00 - 8:00',
        studio: 'Flex studio',
        name: 'Hatha Yoga',
        trainer: 'Daryna Milovska',
        id: '1',
        location: 'Flex studio',
        date: '01.12.24',
      },
      {
        time: '7:00 - 8:00',
        studio: 'Cycle studio',
        name: 'Hill Climb',
        trainer: 'Yuliya Shevchenko',
        id: '7',
        location: 'Cycle studio',
        date: '01.11.24',
      },
      {
        time: '7:00 - 8:00',
        studio: 'Cardio studio',
        name: 'HIIT',
        trainer: 'Roman Kovalenko',
        id: '2',
        location: 'Cardio studio',
        date: '05.10.24',
      },
    ],
  },
  {
    time: '8:00 - 9:00',
    classes: [
      {
        time: '8:00 - 9:00',
        studio: 'Mind studio',
        name: 'Barre',
        trainer: 'Daryna Milovska',
        id: '8',
        location: 'Mind studio',
        date: '05.12.24',
      },
      {
        time: '8:00 - 9:00',
        studio: 'Power studio',
        name: 'Circuit Training',
        trainer: 'Oleksandr Kovalchuk',
        id: '3',
        date: '02.12.24',
      },
    ],
  },
  {
    time: '12:00 - 13:00',
    classes: [
      {
        time: '12:00 - 13:00',
        studio: 'Power studio',
        name: 'HI-SIT',
        trainer: 'Olexander Kovalchuk',
        id: '4',
        location: 'Power studio',
        date: '01.12.24',
      },
      {
        time: '12:00 - 13:00',
        studio: 'Power studio',
        name: 'Circuit Training',
        trainer: 'Natalia Voloshyna',
        id: '5',
        location: 'Power studio',
        date: '01.02.24',
      },
      {
        time: '12:00 - 13:00',
        studio: 'Power studio',
        name: 'Circuit Training',
        trainer: 'Oleksandr Kovalchuk',
        id: '3',
        date: '07.12.24',
      },
    ],
  },
  {
    time: '17:00 - 18:00',
    classes: [
      {
        time: '17:00 - 18:00',
        studio: 'Mind studio',
        name: 'HI-SIT',
        trainer: 'Olexander Kovalchuk',
        id: '4',
        location: 'Power studio',
        date: '03.11.24',
      },
    ],
  },
];

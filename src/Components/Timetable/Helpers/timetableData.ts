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
  name: string;
  studio: string;
  trainer: string;
  id: string;
  location: string;
  date: string;
  hard: string;
  capacity: string;
};

export type WorkoutTimetable = {
  time: string;
  classes: Class[];
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
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '0',
      },
      {
        time: '7:00 - 8:00',
        studio: 'Cycle studio',
        name: 'Hill Climb',
        trainer: 'Yuliya Shevchenko',
        id: '2',
        location: 'Gym',
        date: '',
        hard: '3',
        capacity: '0',
      },
      {
        time: '7:00 - 8:00',
        studio: 'Cardio studio',
        name: 'HIIT',
        trainer: 'Roman Kovalenko',
        id: '3',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '3',
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
        id: '4',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '5',
      },
      {
        time: '8:00 - 9:00',
        studio: 'Power studio',
        name: 'Circuit Training',
        trainer: 'Oleksandr Koval',
        id: '5',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '5',
      },
    ],
  },
  {
    time: '9:00 - 10:00',
    classes: [
      {
        time: '9:00 - 10:00',
        studio: 'Flex studio',
        name: 'Yin Yoga',
        trainer: 'Serhiy Antonovych',
        id: '6',
        location: 'Gym',
        date: '',
        hard: '3',
        capacity: '5',
      },
      {
        time: '9:00 - 10:00',
        studio: 'Cardio studio',
        name: 'Kickboxing Cardio',
        trainer: 'Olena Zakharach',
        id: '7',
        location: 'Gym',
        date: '',
        hard: '3',
        capacity: '0',
      },
    ],
  },
  {
    time: '11:00 - 12:00',
    classes: [
      {
        time: '11:00 - 12:00',
        studio: 'Power studio',
        name: 'HI-SIT',
        trainer: 'Natalia Voloshyna',
        id: '8',
        location: 'Gym',
        date: '',
        hard: '3',
        capacity: '5',
      },
    ],
  },
  {
    time: '13:00 - 14:00',
    classes: [
      {
        time: '13:00 - 14:00',
        studio: 'Cycle studio',
        name: 'Interval Ride',
        trainer: 'Andriy Tkachenko',
        id: '9',
        location: 'Gym',
        date: '',
        hard: '3',
        capacity: '0',
      },
    ],
  },
  {
    time: '14:00 - 15:00',
    classes: [
      {
        time: '14:00 - 15:00',
        studio: 'Flex studio',
        name: 'Power Yoga',
        trainer: 'Daryna Milovska',
        id: '10',
        location: 'Gym',
        date: '',
        hard: '3',
        capacity: '5',
      },
      {
        time: '14:00 - 15:00',
        studio: 'Power studio',
        name: 'Tai Chi',
        trainer: 'Serhiy Antonovych',
        id: '11',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '5',
      },
      {
        time: '14:00 - 15:00',
        studio: 'Cardio studio',
        name: 'HIIT',
        trainer: 'Roman Kovalenko',
        id: '12',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '5',
      },
    ],
  },
  {
    time: '16:00 - 17:00',
    classes: [
      {
        time: '16:00 - 17:00',
        studio: 'Mind studio',
        name: 'Barre',
        trainer: 'Daryna Milovska',
        id: '13',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '5',
      },
      {
        time: '16:00 - 17:00',
        studio: 'Power studio',
        name: 'Powerlifting',
        trainer: 'Oleksandr Koval',
        id: '14',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '5',
      },
    ],
  },
  {
    time: '17:00 - 18:00',
    classes: [
      {
        time: '17:00 - 18:00',
        studio: 'Cycle studio',
        name: 'Recovery Ride',
        trainer: 'Yuliya Shevchenko',
        id: '15',
        location: 'Gym',
        date: '',
        hard: '1',
        capacity: '5',
      },
    ],
  },
  {
    time: '19:00 - 20:00',
    classes: [
      {
        time: '19:00 - 20:00',
        studio: 'Cycle studio',
        name: 'Sprint Drills',
        trainer: 'Andriy Tkachenko',
        id: '16',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '5',
      },
      {
        time: '19:00 - 20:00',
        studio: 'Cardio studio',
        name: 'Aerobic Step',
        trainer: 'Roman Kovalenko',
        id: '17',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '5',
      },
    ],
  },
  {
    time: '19:00 - 20:00',
    classes: [
      {
        time: '19:00 - 20:00',
        studio: 'Cycle studio',
        name: 'Sprint Drills',
        trainer: 'Andriy Tkachenko',
        id: '18',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '5',
      },
      {
        time: '19:00 - 20:00',
        studio: 'Cardio studio',
        name: 'Aerobic Step',
        trainer: 'Roman Kovalenko',
        id: '19',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '5',
      },
    ],
  },
  {
    time: '20:00 - 21:00',
    classes: [
      {
        time: '20:00 - 21:00',
        studio: 'Flex studio',
        name: 'Stretch & Relax',
        trainer: 'Daryna Milovska',
        id: '20',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '0',
      },
      {
        time: '20:00 - 21:00',
        studio: 'Mind studio',
        name: 'Tai Chi',
        trainer: 'Serhiy Antonovych',
        id: '21',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '5',
      },
      {
        time: '20:00 - 21:00',
        studio: 'Cardio studio',
        name: 'Zumba',
        trainer: 'Olena Zakharach',
        id: '22',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '0',
      },
      {
        time: '20:00 - 21:00',
        studio: 'Power studio',
        name: 'Powerlifting',
        trainer: 'Oleksandr Kovalchuk',
        id: '23',
        location: 'Gym',
        date: '',
        hard: '2',
        capacity: '5',
      },
    ],
  },
  {
    time: '21:00 - 22:00',
    classes: [
      {
        time: '21:00 - 22:00',
        studio: 'Mind studio',
        name: 'Meditation',
        trainer: 'Daryna Milovska',
        id: '24',
        location: 'Gym',
        date: '',
        hard: '1',
        capacity: '0',
      },
      {
        time: '21:00 - 22:00',
        studio: 'Cycle studio',
        name: 'Recovery Ride',
        trainer: 'Yuliya Shevchenko',
        id: '25',
        location: 'Gym',
        date: '',
        hard: '1',
        capacity: '5',
      },
      {
        time: '21:00 - 22:00',
        studio: 'Power studio',
        name: 'HI-SIT',
        trainer: 'Natalia Voloshyna',
        id: '26',
        location: 'Gym',
        date: '',
        hard: '3',
        capacity: '0',
      },
    ],
  },
];

export const ledWorkoutsTable = [
  {
    time: '7:00 - 8:00',
    classes: [
      {
        time: '7:00 - 8:00',
        name: '',
        studio: 'Flex studio',
        trainer: 'Serhiy Antonovych',
        id: '1',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '7:00 - 8:00',
        name: '',
        studio: 'Cycle studio',
        trainer: 'Andriy Tkachenko',
        id: '2',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '7:00 - 8:00',
        name: '',
        studio: 'Cardio studio',
        trainer: 'Olena Zakharach',
        id: '3',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '7:00 - 8:00',
        name: '',
        studio: 'Power studio',
        trainer: 'Oleksandr Koval',
        id: '4',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
    ],
  },
  {
    time: '8:00 - 9:00',
    classes: [
      {
        time: '8:00 - 9:00',
        name: '',
        studio: 'Flex studio',
        trainer: 'Serhiy Antonovych',
        id: '5',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '8:00 - 9:00',
        name: '',
        studio: 'Cycle studio',
        trainer: 'Yuliya Shevchenko',
        id: '6',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '8:00 - 9:00',
        name: '',
        studio: 'Cardio studio',
        trainer: 'Roman Kovalenko',
        id: '7',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '8:00 - 9:00',
        name: '',
        studio: 'Power studio',
        trainer: 'Natalia Voloshyna',
        id: '8',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
    ],
  },
  {
    time: '9:00 - 10:00',
    classes: [
      {
        time: '9:00 - 10:00',
        name: '',
        studio: 'Mind studio',
        trainer: 'Daryna Milovska',
        id: '9',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '9:00 - 10:00',
        name: '',
        studio: 'Cardio studio',
        trainer: 'Andriy Tkachenko',
        id: '10',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '9:00 - 10:00',
        name: '',
        studio: 'Power studio',
        trainer: 'Oleksandr Koval',
        id: '10',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
    ],
  },
  {
    time: '10:00 - 11:00',
    classes: [
      {
        time: '10:00 - 11:00',
        name: '',
        studio: 'Flex studio',
        trainer: 'Serhiy Antonovych',
        id: '11',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '10:00 - 11:00',
        name: '',
        studio: 'Mind studio',
        trainer: 'Daryna Milovska',
        id: '12',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '10:00 - 11:00',
        name: '',
        studio: 'Cycle studio',
        trainer: 'Andriy Tkachenko',
        id: '13',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
    ],
  },
  {
    time: '11:00 - 12:00',
    classes: [
      {
        time: '11:00 - 12:00',
        name: '',
        studio: 'Mind studio',
        trainer: 'Daryna Milovska',
        id: '14',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
    ],
  },
  {
    time: '12:00 - 13:00',
    classes: [
      {
        time: '12:00 - 13:00',
        name: '',
        studio: 'Cycle studio',
        trainer: 'Yuliya Shevchenko',
        id: '15',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
    ],
  },
  {
    time: '13:00 - 14:00',
    classes: [
      {
        time: '13:00 - 14:00',
        name: '',
        studio: 'Mind studio',
        trainer: 'Daryna Milovska',
        id: '16',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '13:00 - 14:00',
        name: '',
        studio: 'Cycle studio',
        trainer: 'Yulia Shevchenko',
        id: '17',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '13:00 - 14:00',
        name: '',
        studio: 'Cardio studio',
        trainer: 'Olena Zakcharach',
        id: '18',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '13:00 - 14:00',
        name: '',
        studio: 'Power studio',
        trainer: 'Natalia Voloshyna',
        id: '19',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
    ],
  },
  {
    time: '14:00 - 15:00',
    classes: [
      {
        time: '14:00 - 15:00',
        name: '',
        studio: 'Flex studio',
        trainer: 'Serhiy Antonovych',
        id: '20',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '14:00 - 15:00',
        name: '',
        studio: 'Mind studio',
        trainer: 'Daryna Milovska',
        id: '21',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '14:00 - 15:00',
        name: '',
        studio: 'Andriy Tkachenko',
        trainer: 'Serhiy Antonovych',
        id: '22',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '14:00 - 15:00',
        name: '',
        studio: 'Cardio studio',
        trainer: 'Olena Zakharach',
        id: '23',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '14:00 - 15:00',
        name: '',
        studio: 'Power studio',
        trainer: 'Natalia Voloshyna',
        id: '24',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
    ],
  },
  {
    time: '15:00 - 16:00',
    classes: [
      {
        time: '15:00 - 16:00',
        name: '',
        studio: 'Cycle studio',
        trainer: 'Andriy Tkachenko',
        id: '25',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '15:00 - 16:00',
        name: '',
        studio: 'Cardio studio',
        trainer: 'Olena Zakharach',
        id: '26',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '15:00 - 16:00',
        name: '',
        studio: 'Power studio',
        trainer: 'Natalia Voloshyna',
        id: '27',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
    ],
  },
  {
    time: '16:00 - 17:00',
    classes: [
      {
        time: '16:00 - 17:00',
        name: '',
        studio: 'Flex studio',
        trainer: 'Serhiy Antonovych',
        id: '28',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '16:00 - 17:00',
        name: '',
        studio: 'Cycle studio',
        trainer: 'Andriy Tkachenko',
        id: '29',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '16:00 - 17:00',
        name: '',
        studio: 'Cardio studio',
        trainer: 'Olena Zakharach',
        id: '30',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '16:00 - 17:00',
        name: '',
        studio: 'Power studio',
        trainer: 'Natalia Voloshyna',
        id: '31',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
    ],
  },
  {
    time: '17:00 - 18:00',
    classes: [
      {
        time: '17:00 - 18:00',
        name: '',
        studio: 'Flex studio',
        trainer: 'Serhiy Antonovych',
        id: '32',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '17:00 - 18:00',
        name: '',
        studio: 'Cycle studio',
        trainer: 'Andriy Tkachenko',
        id: '33',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '17:00 - 18:00',
        name: '',
        studio: 'Cardio studio',
        trainer: 'Roman Kovalenko',
        id: '34',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
    ],
  },
  {
    time: '18:00 - 19:00',
    classes: [
      {
        time: '18:00 - 19:00',
        name: '',
        studio: 'Mind studio',
        trainer: 'Daryna Milovska',
        id: '35',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '18:00 - 19:00',
        name: '',
        studio: 'Cycle studio',
        trainer: 'Yuliya Shevchenko',
        id: '36',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '18:00 - 19:00',
        name: '',
        studio: 'Cardio studio',
        trainer: 'Olena Zakharach',
        id: '37',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '18:00 - 19:00',
        name: '',
        studio: 'Power studio',
        trainer: 'Oleksandr Koval',
        id: '38',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
    ],
  },
  {
    time: '19:00 - 20:00',
    classes: [
      {
        time: '19:00 - 20:00',
        name: '',
        studio: 'Mind studio',
        trainer: 'Daryna Milovska',
        id: '39',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '19:00 - 20:00',
        name: '',
        studio: 'Cycle studio',
        trainer: 'Yulia Shevchenko',
        id: '40',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '19:00 - 20:00',
        name: '',
        studio: 'Cardio studio',
        trainer: 'Olena Zakharach',
        id: '41',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '19:00 - 20:00',
        name: '',
        studio: 'Power studio',
        trainer: 'Oleksandr Koval',
        id: '42',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
    ],
  },
  {
    time: '20:00 - 21:00',
    classes: [
      {
        time: '20:00 - 21:00',
        name: '',
        studio: 'Flex studio',
        trainer: 'Serhiy Antonovych',
        id: '43',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '20:00 - 21:00',
        name: '',
        studio: 'Cycle studio',
        trainer: 'Andriy Tkachenko',
        id: '44',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '20:00 - 21:00',
        name: '',
        studio: 'Cardio studio',
        trainer: 'Roman Kovalenko',
        id: '45',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '20:00 - 21:00',
        name: '',
        studio: 'Power studio',
        trainer: 'Natalia Voloshyna',
        id: '46',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
    ],
  },
  {
    time: '21:00 - 22:00',
    classes: [
      {
        time: '21:00 - 22:00',
        name: '',
        studio: 'Mind studio',
        trainer: 'Daryna Milovska',
        id: '47',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '21:00 - 22:00',
        name: '',
        studio: 'Cycle studio',
        trainer: 'Andriy Tkachenko',
        id: '48',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '0',
      },
      {
        time: '21:00 - 22:00',
        name: '',
        studio: 'Cardio studio',
        trainer: 'Roman Kovalenko',
        id: '49',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
      {
        time: '21:00 - 22:00',
        name: '',
        studio: 'Power studio',
        trainer: 'Oleksandr Koval',
        id: '50',
        location: 'Gym',
        date: '',
        hard: '',
        capacity: '1',
      },
    ],
  },
];
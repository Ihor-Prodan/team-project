export const navItems = [
  {
    name: 'Timetable',
    path: 'timetable',
    dropdownItems: [
      { name: 'Group Workout', path: 'group-workout' },
      { name: 'Trainer-Led Workout', path: 'trainer-led-workout' },
    ],
  },
  {
    name: 'Workout plans',
    path: 'workout',
    dropdownItems: [
      { name: 'Group Workout', path: 'group-workout' },
      {
        name: 'Trainer-Led Workout',
        path: 'trainer-led-workout',
      },
      {
        name: 'Self-Guided Workout',
        path: 'self-guided-workout',
      },
    ],
  },
  {
    name: 'Trainers',
    path: 'trainers',
  },
  {
    name: 'Prices',
    path: 'prices',
  },
  {
    name: 'Contacts',
    path: 'contacts',
  },
];

export default navItems;

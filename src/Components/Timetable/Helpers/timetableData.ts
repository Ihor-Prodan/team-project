import { WorkoutTimetable } from '../../../Types/TimeTableType';
import { Training } from '../../../Types/TrainingsType';

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

export function groupTrainingsByTime(trng: Training[]): WorkoutTimetable[] {
  return trng.reduce((acc, training) => {
    const existingGroup = acc.find(group => group.time === training.time);

    if (existingGroup) {
      existingGroup.classes.push(training);
    } else {
      acc.push({
        time: training.time,
        classes: [training],
      });
    }

    return acc;
  }, [] as WorkoutTimetable[]);
}

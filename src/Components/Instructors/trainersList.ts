/* eslint-disable max-len */
export type TrainerType = {
  id: string;
  name: string;
  price: string;
  image: string;
  experience: string;
  experiencetwo: string;
  specialty: string;
  isTop: boolean;
};

export const trainers = [
  {
    id: '1',
    name: 'Serhiy Antonovych',
    price: '1000',
    image: 'https://i.ibb.co/VVw6r0C/Serhiy-Antonovych.jpg',
    experience:
      'Serhiy has over 8 years of experience in personal training and athletic coaching. He began his career specializing in traditional yoga techniques and later incorporated Tai Chi into his practice.',
    experiencetwo:
      ' Serhiy has successfully guided clients in achieving mindfulness and flexibility through Yin Yoga practice combined with the Tai Chi.',
    specialty: 'Yin Yoga, Tai Chi',
    isTop: true,
  },
  {
    id: '2',
    name: 'Daryna Milovska',
    price: '1000',
    image: 'https://i.ibb.co/c6K4cjF/Daryna-Milovska.jpg',
    experience:
      'Daryna is a certified yoga instructor with 4 years of experience. She started her career focusing on Hatha Yoga, expanding into Power Yoga to cater to clients seeking strength and flexibility.',
    experiencetwo: `Daryna's expertise also includes leading Stretch & Relax sessions, utilizing yoga props and therapeutic techniques for relaxation.`,
    specialty: 'Hatha Yoga, Power Yoga, Stretch & Relax, Meditation',
    isTop: true,
  },
  {
    id: '3',
    name: 'Natalia Voloshyna',
    price: '1000',
    image: 'https://i.ibb.co/y0hXpk9/Natalia-Voloshyna.jpg',
    experience:
      'Natalia has 5 years of experience as a fitness instructor. She began her career by developing specialized interval training programs tailored to individuals aiming for fitness goals.',
    experiencetwo: `Natalia's coaching approach emphasizes dynamic workouts that combine sprint drills and interval training techniques.`,
    specialty: 'HI-SIT (High-Intensity Sprint Interval Training)',
    isTop: true,
  },
  {
    id: '4',
    name: 'Oleksandr Koval',
    price: '1000',
    image: 'https://i.ibb.co/wQ3rM8w/Oleksandr-Koval.jpg',
    experience: `Oleksandr has 5 years of expertise in functional fitness and powerlifting. He started his career focusing on Circuit Training, designing comprehensive workout routines.`,
    experiencetwo: `Oleksandr's passion for strength and muscle development led him to specialize in Powerlifting.`,
    specialty: 'Circuit Training, Powerlifting',
    isTop: true,
  },
  {
    id: '5',
    name: 'Andriy Tkachenko',
    price: '800',
    image: 'https://i.ibb.co/2YKJwhN/Andriy-Tkachenko.jpg',
    experience: `Andriy is a CrossFit Level 2 Trainer with 4 years of experience. He began his career specializing in CrossFit methodology and transitioned into leading Interval Ride cycling classes.`,
    experiencetwo: `Andriy's coaching style emphasizes HIIT techniques with sprint drills to enhance speed, agility, and athletic performance.`,
    specialty: 'Interval Ride, Sprint Drills',
    isTop: false,
  },
  {
    id: '6',
    name: 'Yuliya Shevchenko',
    price: '800',
    image: 'https://i.ibb.co/vs51StY/Yuliya-Shevchenko.jpg',
    experience: `Yuliya is a certified Pilates instructor with 3 years of experience. She started her career specializing in Pilates to promote core strength, flexibility, and body alignment.`,
    experiencetwo: `She incorporates Recovery Ride sessions, providing active recovery workouts enhancing circulation and muscle relaxation.`,
    specialty: 'Hill Climb, Recovery Ride',
    isTop: false,
  },
  {
    id: '7',
    name: 'Roman Kovalenko',
    price: '800',
    image: 'https://i.ibb.co/nb5hHdX/Roman-Kovalenko.jpg',
    experience: `Roman has 2 years of teaching experience. He began specializing in martial arts for self-defense and fitness, later integrating HIIT workouts into his training programs.`,
    experiencetwo: `Roman's expertise also includes leading Aerobic Step classes, utilizing step platforms to improve cardiovascular health.`,
    specialty: 'HIIT (High-Intensity Interval Training), Aerobic Step',
    isTop: false,
  },
  {
    id: '8',
    name: 'Olena Zakharach',
    price: '800',
    image: 'https://i.ibb.co/thKXgG2/Olena-Zakharach.jpg',
    experience: `Olena has 6 years of experience in fitness instruction. She began her career by focusing on fitness strategies and later incorporated Kickboxing Cardio to promote cardiovascular health and stamina.`,
    experiencetwo: `She also leads Zumba sessions, using dance to enhance fitness and provide a fun, energetic workout.`,
    specialty: 'Kickboxing Cardio, Zumba',
    isTop: false,
  },
];

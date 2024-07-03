/* eslint-disable max-len */
export const workoutDetails = [
  {
    name: 'Hatha Yoga',
    category: 'Flex & Stretch',
    duration: '1 hour',
    couch: 'Daryna Milovska',
    hardLewel: '2',
    description:
      'Experience deep relaxation and improved flexibility through gentle poses and focused breathing techniques in Hatha Yoga. These sessions are ideal for all levels and emphasize aligning the body and mind through mindful practice.',
    preparationTips: 'Wear comfortable clothing, bring a towel.',
    image: 'https://i.ibb.co/sJFsrwt/Hatha-Yoga.jpg',
    id: '1',
  },
  {
    name: 'Yin Yoga',
    category: 'Flex & Stretch',
    duration: '1 hour',
    couch: 'Serhiy Antonovych',
    hardLewel: '2',
    description:
      'A practice that focuses on deep stretching and relaxation. Enhance flexibility, release tension, and promote overall well-being in these soothing sessions that emphasize holding poses for longer periods to access deeper connective tissues.',
    preparationTips:
      'Wear comfortable clothing, bring a blanket or bolster for support.',
    image: 'https://i.ibb.co/19GTHT7/Yin-Yoga.jpg',
    id: '2',
  },
  {
    name: 'Circuit Training',
    category: 'Strength & Mass',
    duration: '1 hour',
    couch: 'Oleksandr Kovalchuk',
    hardLewel: '2',
    description:
      'Achieve total-body conditioning with a dynamic workout to enhance strength, endurance, and agility through a variety of exercises. Each session challenges different muscle groups and integrates cardio and resistance training.',
    preparationTips: 'Wear supportive shoes, bring a water bottle.',
    image:
      'https://drive.google.com/file/d/1QFc_WVI_oYCmHWpCYPWkbaZoy4sxSLff/view?usp=sharing',
    id: '3',
  },
];

export const initialStateCart = [
  {
    name: 'Hatha Yoga',
    category: 'Flex & Stretch',
    duration: '1 hour',
    couch: 'Daryna Milovska',
    hardLewel: '2',
    description:
      'Experience deep relaxation and improved flexibility through gentle poses and focused breathing techniques in Hatha Yoga sessions led by Daryna Milovska.',
    preparationTips: 'Wear comfortable clothing, bring a towel.',
    image: 'https://i.ibb.co/sJFsrwt/Hatha-Yoga.jpg',
    id: '1',
    isTop: true,
  },
  {
    name: 'Yin Yoga',
    category: 'Flex & Stretch',
    duration: '1 hour',
    couch: 'Serhiy Antonovych',
    hardLewel: '2',
    description:
      'A practice that focuses on deep stretching and relaxation. Enhance flexibility, release tension, and promote overall well-being in these soothing sessions that emphasize holding poses for longer periods to access deeper connective tissues.',
    preparationTips:
      'Wear comfortable clothing, bring a blanket or bolster for support.',
    image: 'https://i.ibb.co/19GTHT7/Yin-Yoga.jpg',
    id: '2',
    isTop: false,
  },
  {
    name: 'Power Yoga',
    category: 'Flex & Stretch',
    duration: '1 hour',
    couch: 'Daryna Milovska',
    hardLewel: '2',
    description: `Daryna Milovska's Power Yoga classes focus on building strength, flexibility, and concentration through vigorous yoga sequences. Improve muscle tone, enhance mental focus, and energize your body.`,
    preparationTips: 'Wear comfortable clothing.',
    image: 'https://i.ibb.co/TPbtF8c/Power-Yoga.jpg',
    id: '3',
    isTop: false,
  },
  {
    name: 'Stretch & Relax',
    category: 'Flex & Stretch',
    duration: '1 hour',
    couch: 'Daryna Milovska',
    hardLewel: '2',
    description:
      'Stretch & Relax sessions focused on gentle stretching and relaxation techniques. Release muscle tension, improve flexibility, and promote relaxation for enhanced well-being, offering a perfect way to unwind and rejuvenate after a long day.',
    preparationTips: 'Wear comfortable clothing, bring a towel.',
    image: 'https://i.ibb.co/jLDBrWH/Stretch-Relax.jpg',
    id: '4',
    isTop: false,
  },
  {
    name: 'Barre',
    category: 'Flex & Stretch',
    duration: '1 hour',
    couch: 'Daryna Milovska',
    hardLewel: '2',
    description:
      'Barre classes combine ballet-inspired movements with strength training and stretching. Sculpt and tone muscles, improve posture, and increase flexibility in these dynamic workouts that integrate dance elements with core strengthening exercises.',
    preparationTips: 'Wear comfortable clothing, bring a towel.',
    image: 'https://i.ibb.co/qxrZHNf/Barre.jpg',
    id: '5',
    isTop: false,
  },
  {
    name: 'Tai Chi',
    category: 'Flex & Stretch',
    duration: '1 hour',
    couch: 'Serhiy Antonovych',
    hardLewel: '2',
    description:
      'Barre classes combine ballet-inspired movements with strength training and stretching. Sculpt and tone muscles, improve posture, and increase flexibility in these dynamic workouts that integrate dance elements with core strengthening exercises.',
    preparationTips: 'Wear comfortable clothing, eat light.',
    image: 'https://i.ibb.co/jfnPxWN/Tai-Chi.jpg',
    id: '6',
    isTop: false,
  },
  {
    name: 'Meditation',
    category: 'Flex & Stretch',
    duration: '1 hour',
    couch: 'Daryna Milovska',
    hardLewel: '2',
    description: `Experience inner peace and mental clarity with Daryna Milovska's Meditation sessions. Learn mindfulness techniques, reduce stress, and enhance overall well-being through guided meditation practices that foster a sense of calm and emotional balance.`,
    preparationTips: 'Wear comfortable clothing, eat light.',
    image: 'https://i.ibb.co/2K4x4t4/Meditation.jpg',
    id: '7',
    isTop: false,
  },
];

export type CardType = {
  name: string;
  category: string;
  duration: string;
  couch: string;
  hardLewel: string;
  description: string;
  preparationTips: string;
  image: string;
  id: string;
  isTop: boolean;
};

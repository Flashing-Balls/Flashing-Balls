import videoUrl from '../img/video.jpg';

const DATA = [
  {
    id: 0,
    video: videoUrl,
    user: 'John Doe',
    comments: [
      {
        id: 0,
        user: 'James Johns',
        text: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 1,
        user: 'Tina Turner',
        text: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 2,
        user: 'Zoe Zandberg',
        text: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
  { id: 1,
    video: videoUrl,
    user: 'Tony Hawk',
    comments: [
      {
        id: 3,
        user: 'James Johns',
        text: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 4,
        user: 'Tina Turner',
        text: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 5,
        user: 'Zoe Zandberg',
        text: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
  {
    id: 2,
    video: videoUrl,
    user: 'Shawn White',
    comments: [
      {
        id: 6,
        user: 'James Johns',
        text: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 7,
        user: 'Tina Turner',
        text: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 8,
        user: 'Zoe Zandberg',
        text: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
];

export default function getMockedPostscallback() {
  return Promise.resolve( DATA );
}

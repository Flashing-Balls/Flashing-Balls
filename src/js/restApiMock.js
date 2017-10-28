const DATA = [
  {
    id: 0,
    video: 'https://google.com',
    user: 'John Doe',
    comments: [
      {
        id: 0,
        user: 'JJ',
        text: '1',
      },
      {
        id: 1,
        user: 'TT',
        text: '2',
      },
      {
        id: 2,
        user: 'ZZ',
        text: '3',
      },
    ],
  },
  { id: 1,
    video: 'https://google.com',
    user: 'Tony Hawk',
    comments: [
      {
        id: 1,
        user: 'JJ',
        text: '1',
      },
      {
        id: 2,
        user: 'TT',
        text: '2',
      },
      {
        id: 3,
        user: 'ZZ',
        text: '3',
      },
    ],
  },
  {
    id: 2,
    video: 'https://google.com',
    user: 'Shawn White',
    comments: [
      {
        id: 4,
        user: 'JJ',
        text: '1',
      },
      {
        id: 5,
        user: 'TT',
        text: '2',
      },
      {
        id: 6,
        user: 'ZZ',
        text: '3',
      },
    ],
  },
];

export default function getMockedPostscallback() {
  return Promise.resolve( DATA );
}

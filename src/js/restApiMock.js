const DATA = [
  {
    video: 'https://google.com',
    user: 'John Doe',
    comments: [
      {
        user: 'JJ',
        text: '1',
      },
      {
        user: 'TT',
        text: '2',
      },
      {
        user: 'ZZ',
        text: '3',
      }
    ],
  },
  {
    video: 'https://google.com',
    user: 'Tony Hawk',
    comments: [
      {
        user: 'JJ',
        text: '1',
      },
      {
        user: 'TT',
        text: '2',
      },
      {
        user: 'ZZ',
        text: '3',
      }
    ],
  },
  {
    video: 'https://google.com',
    user: 'Shawn White',
    comments: [
      {
        user: 'JJ',
        text: '1',
      },
      {
        user: 'TT',
        text: '2',
      },
      {
        user: 'ZZ',
        text: '3',
      }
    ],
  },
];

export default function getMockedPostscallback() {
  return Promise.resolve( DATA );
}

const DATA = [
  {
    video: 'https://google.com',
    user: 'John Doe',
  },
  {
    video: 'https://google.com',
    user: 'Tony Hawk',
  },
  {
    video: 'https://google.com',
    user: 'Shawn White',
  },
];

export default function getMockedPostscallback() {
  return Promise.resolve( DATA );
}

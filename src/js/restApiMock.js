import videoUrl from '../img/video.jpg';

const user1 = {
  username: 'johndoe',
  fullname: 'John Doe',
  avatar: '../img/avatar.jpg',
};

const user2 = {
  username: 'tinaturner',
  fullname: 'Tina Turner',
  avatar: '../img/avatar.jpg',
};

const user3 = {
  username: 'zoezandbgerg',
  fullname: 'Zoe Zandberg',
  avatar: '../img/avatar.jpg',
};

const user4 = {
  username: 'tonyhawk',
  fullname: 'Tony Hawk',
  avatar: '../img/avatar.jpg',
};

const DATA = [
  {
    id: 0,
    video: videoUrl,
    user: user1,
    comments: [
      {
        id: 0,
        user: user1,
        text: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 1,
        user: user2,
        text: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 2,
        user: user3,
        text: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
  { id: 1,
    video: videoUrl,
    user: user4,
    comments: [
      {
        id: 3,
        user: user1,
        text: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 4,
        user: user2,
        text: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 5,
        user: user3,
        text: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
  {
    id: 2,
    video: videoUrl,
    user: user3,
    comments: [
      {
        id: 6,
        user: user1,
        text: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 7,
        user: user2,
        text: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 8,
        user: user3,
        text: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
];

export default function getMockedPostscallback() {
  return Promise.resolve( DATA );
}

export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'Name of The Wind',
        },
        {
          key: 1,
          title: 'StormLight Archieve',
        },
        {
          key: 2,
          title: 'Song of Fire and Ice',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Back to the Future',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'Baldurs Gate',
        },
        {
          key: 1,
          title: 'Planescape Torment',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things you should read <sup>soon!</sup>',
    description: 'My favourite books',
    image: 'https://miro.medium.com/max/780/1*C76PXdoMXtysxqiwkS5iow.png',
  }, 
  {
    id: 'list-2',
    title: 'Things you should watch <sup>soon!</sup>',
    description: 'My favourite movies ',
    image: 'https://cdn.abcotvs.com/dip/images/5698337_holiday-hallmark-movie-binge.jpg?w=800&r=16%3A9',
  }, {
    id: 'list-3',
    title: 'Things you should play <sup>soon!</sup>',
    description: 'My favourite video games',
    image: 'https://images.theconversation.com/files/327017/original/file-20200409-112571-1lbz2fo.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Fantasy Books',
    icon: 'dice',
  }, 
  {
    id: 'column-6',
    listId: 'list-1',
    title: 'Sc-Fi Books',
    icon: 'rocket',
  },
  {
    id: 'column-2',
    listId: 'list-2',
    title: 'Action',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-3',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Dramas',
    icon: 'mask',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Animation',
    icon: 'baby',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'Name of The Wind',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'StormLight Archieve',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Back to the Future',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'Baldurs Gate',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Planescape Torment',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export const FaqData = {
  title: 'Frequently asked questions',
  image: 'https://st2.depositphotos.com/1637332/6198/i/600/depositphotos_61989025-stock-photo-business-button-faq.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

export const InfoData = {
  title: 'Useful Information',
  image: 'https://image.shutterstock.com/image-photo/helpful-tips-260nw-271166084.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

export default initialStoreData;

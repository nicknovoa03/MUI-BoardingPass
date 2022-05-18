import React from 'react';

import {
  BoardingPass as BoardingPassView
} from 'views';

const routes = [
  {
    path: '/boardingpass',
    renderer: (params = {}) => <BoardingPassView {...params} />,
  },
  {
    path: '/',
    renderer: (params = {}) => <BoardingPassView {...params} />,
  },
];

export default routes;

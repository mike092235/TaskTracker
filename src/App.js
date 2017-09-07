import React from 'react';
import TaskTracker from './TaskTracker';

let cardsList = [
  {
    id: 1,
    title: "Learn new language",
    description: "I should learn how to speak French",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Plan your next trip",
    description: "Travel to a foreign island",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "Costa Rica",
        done: true
      },
      {
        id: 2,
        name: "Cancun",
        done: false
      },
      {
        id: 3,
        name: "Dominican Republic",
        done: false
      }
    ]
  },
];


React.render(<TaskTracker cards={cardsList} />, document.getElementById('root'));


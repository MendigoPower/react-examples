export const questionsData = [
  {
    id: 1,
    question:
      'If you want to import just the Component from the React library, what syntax do you use?',
    incorrectAnswers: [
      `import React.Component from 'react'`,
      `import [ Component ] from 'react'`,
      `import Component from 'react'`,
    ],
    correctAnswer: `import { Component } from 'react'`,
  },
  {
    id: 2,
    question:
      'Why might you use useReducer over useState in a React component?',
    incorrectAnswers: [
      `when you want to replace Redux`,
      ` when you want to improve performance`,
      `when you want to break your production app`,
    ],
    correctAnswer: `when you need to manage more complex state in an app`,
  },
  {
    id: 3,
    question:
      ' A representation of a user interface that is kept in memory and is synced with the "real" DOM is called what?',
    incorrectAnswers: [`DOM`, `virtual elements`, `shadow DOM`],
    correctAnswer: `virtual DOM`,
  },
  {
    id: 4,
    question:
      ' In which lifecycle method do you make requests for data in a class component?',
    incorrectAnswers: [
      `constructor`,
      `componentWillMount`,
      `componentWillReceiveProps`,
    ],
    correctAnswer: `componentDidMount`,
  },
  {
    id: 5,
    question:
      'How do you handle passing through the component tree without having to pass props down manually at every level?',
    incorrectAnswers: [`React Send`, `React Pinpoint`, `React Router`],
    correctAnswer: `React Context`,
  },
];

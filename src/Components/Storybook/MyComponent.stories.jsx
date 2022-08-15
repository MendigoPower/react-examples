
// MyComponent.stories.jsx

import MyComponent from './MyComponent';

export default {
  title: 'Components/MyComponent',
  component: MyComponent,
};

export const Default = () => (
    <MyComponent text='Default Text' />
);

export const Loading = () => (
    <MyComponent text='Component is loading' />
);


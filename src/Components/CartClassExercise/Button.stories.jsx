import React from 'react';

import Button from './Button';

export default {
  title: 'Cart-Exercise/Product/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const AddToCart = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AddToCart.args = {
  label: 'Add to cart',
  type: 'add',
};

export const RemoveItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RemoveItem.args = {
  label: '',
  type: 'remove',
};

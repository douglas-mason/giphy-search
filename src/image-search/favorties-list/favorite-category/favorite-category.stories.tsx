import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  FavoriteCategory,
  FavoriteCategoryProps,
} from './favorite-category.component';

export default {
  title: 'ImageCard/Image',
  component: FavoriteCategory,
} as Meta;

const Template: Story<FavoriteCategoryProps> = (args) => (
  <FavoriteCategory {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  images: [
    {
      url:
        'https://media3.giphy.com/media/ZwFfOcA638P3my0DDq/200w.gif?c…f74bcedjby8ftqv0ip3jyj3tn1j1msp3mrkx1fiurlcoz13&rid=200w.gif',
      description: 'Cute Cupcake',
    },
    {
      url:
        'https://media3.giphy.com/media/ZwFfOcA638P3my0DDq/200w.gif?c…f74bcedjby8ftqv0ip3jyj3tn1j1msp3mrkx1fiurlcoz13&rid=200w.gif',
      description: 'Cute Cupcake',
    },
  ],
  category: 'Cupcakes',
};

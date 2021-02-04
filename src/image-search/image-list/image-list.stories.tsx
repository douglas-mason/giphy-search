import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ImageList, ImageListProps } from './image-list.component';

export default {
  title: 'Images',
  component: ImageList,
} as Meta;

const Template: Story<ImageListProps> = (args) => <ImageList {...args} />;

export const List = Template.bind({});
List.args = {
  images: [
    {
      url:
        'https://media3.giphy.com/media/ZwFfOcA638P3my0DDq/200w.gif?c…f74bcedjby8ftqv0ip3jyj3tn1j1msp3mrkx1fiurlcoz13&rid=200w.gif',
      description: 'Cute Cupcake',
    },
    {
      url:
        'https://media0.giphy.com/media/xivWjnqgIul3y/200w.gif?cid=5f74bced14i21t56hh9x21y6eg8z1ojss1nm1muzowy6uehq&rid=200w.gif',
      description: "Baker's Dozen",
    },
    {
      url:
        'https://media0.giphy.com/media/xTiTnxZCalVGtaq6A0/200w.gif?cid=5f74bced14i21t56hh9x21y6eg8z1ojss1nm1muzowy6uehq&rid=200w.gif',
      description: 'Chrissy Approves',
    },
    {
      url:
        'https://media3.giphy.com/media/3oEjI9dX74ezjCHS7e/200w.gif?cid=5f74bced14i21t56hh9x21y6eg8z1ojss1nm1muzowy6uehq&rid=200w.gif',
      description: 'Icing on the cup cake',
    },
  ],
  category: 'Cupcakes',
};

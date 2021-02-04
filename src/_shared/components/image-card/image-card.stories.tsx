import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ImageCard, ImageCardProps } from './image-card.component';

export default {
  title: 'Images',
  component: ImageCard,
} as Meta;

const Template: Story<ImageCardProps> = (args) => <ImageCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  url:
    'https://media3.giphy.com/media/ZwFfOcA638P3my0DDq/200w.gif?c…f74bcedjby8ftqv0ip3jyj3tn1j1msp3mrkx1fiurlcoz13&rid=200w.gif',
  alt: 'Cute Cupcake',
};

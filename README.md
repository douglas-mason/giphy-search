# Giphy Search

> - Doug Mason

## About

The project was built with the following:

- React
- TypeScript
- Emotion for CSS-in-JS styling
- Ant Design for UI elements
- Storybook for building components in isolation

## How To View

- [Giphy Search hosted on Netlify](https://competent-ride-b98691.netlify.app/)
- [Storybook hosted on Netlify](https://wizardly-heisenberg-a52e9b.netlify.app/)

## How To Build

- To run the project locally run `npm run start` or `yarn start`
- To run the storybook project locally run `npm run storybook` or `yarn storybook`

## Notes

### Areas to work on if I had more time

- I ran out of time to work on the Load more functionality
- I would polish up the UI more. It's pretty basic at this point.
- The design is somewhat responsive, but given more time I would have better met the mobile requirements
- Accessibility could be improved. I was careful to use focusable elements so that clickable items could be navigated to via the keyboard and screen readers could focus on them, but there needs to be better ARIA support.
- There are no tests. Considering the time crunch, I opted to use TypeScript to catch any compile time errors I would have encountered otherwise. So even though I didn't spend time writing tests, I leveraged TS to give me some stability at no cost.

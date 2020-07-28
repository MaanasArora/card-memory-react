# Card Memory - React

A simple card memory game element in React.

## Installation

Use npm:

```
npm install card-memory-react
```

## Using

Import `Game` and inject `<Game />` with the following props:

- `size`: the height and width
- `colors`: an array of the colors to be used for the cards
- `number`: the number of cards to be used, a perfect square (the game is always square currently)

## Example

```jsx
import Game from 'card-memory-react';

const App = () =>
    <Game size={49} colors={['red', 'yellow', 'pink', 'blue'] number={49} />
```

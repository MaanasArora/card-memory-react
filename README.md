# card-memory-react

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/card-memory-react.svg)](https://www.npmjs.com/package/card-memory-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save card-memory-react
```

## Usage

Use the following props:

- `size` in pixels
- `colors` as an array of HTML color strings
- `number` as a square number

```jsx
import React, { Component } from 'react'

import MyComponent from 'card-memory-react'
import 'card-memory-react/dist/index.css'

class Example extends Component {
  render() {
    return <Game
    size={100}
    colors={['red', 'yellow', 'pink', 'blue']}
    number={49} />
  }
}
```

## License

Apache License © [MaanasArora](https://github.com/MaanasArora)

import React from 'react'
import './styles.css'

import Card from 'components/Card'

const choice = (choices) => choices[Math.floor(Math.random() * choices.length)]

const generateSeq = (choices, length) =>
  [...Array(length)].map((i) => choice(choices))

export default class CardMemoryGame extends React.Component {
  constructor(props) {
    super(props)

    let colors = this.props.colors
    let number = this.props.number

    this.state = {
      colors: generateSeq(colors, number),
      isSelected: false,
      lastSelected: 0,
      solved: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.areSameColor = this.areSameColor.bind(this)
  }

  areSameColor(first, second) {
    return this.state.colors[first] == this.state.colors[second]
  }

  handleClick(cardIndex) {
    if (
      this.state.isSelected &&
      this.areSameColor(this.state.lastSelected, cardIndex)
    ) {
      this.setState((prevState) => ({
        solved: prevState.solved.concat([prevState.lastSelected, cardIndex])
      }))
    }

    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
      lastSelected: cardIndex
    }))
  }

  render() {
    return (
      <div
        className='game'
        style={{ height: this.props.size, width: this.props.size }}
      >
        {this.state.colors.map((color, index) => (
          <Card
            color={color}
            key={index}
            index={index}
            size={this.props.size / Math.sqrt(this.props.number)}
            shown={
              this.state.solved.includes(index) ||
              (this.state.isSelected && this.state.lastSelected == index)
            }
            handleClick={this.handleClick}
          />
        ))}
      </div>
    )
  }
}

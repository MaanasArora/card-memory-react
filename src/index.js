import React from 'react'
import styles from './styles.css'

const choice = (choices) => choices[Math.floor(Math.random() * choices.length)]

const generateSeq = (choices, length) =>
  [...Array(length)].map((i) => choice(choices))

export class CardMemoryGame extends React.Component {
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
        className={styles.game}
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

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tapped: false }

    this.startFlip = this.startFlip.bind(this)
  }

  startFlip() {
    this.setState({ tapped: true })
    setTimeout(() => {
      this.setState({ tapped: false })
      this.props.handleClick(this.props.index)
    }, 1500)
  }

  render() {
    let marginCoeff = 0.07

    let size = this.props.size * (1 - 2 * marginCoeff)
    let margin = this.props.size * marginCoeff

    return (
      <div
        className={this.state.tapped ? styles.tappedCard : styles.card}
        onClick={this.startFlip}
        style={{
          width: size,
          height: size,
          margin: margin,
          background:
            this.props.shown || this.state.tapped
              ? this.props.color
              : 'lightblue'
        }}
      />
    )
  }
}

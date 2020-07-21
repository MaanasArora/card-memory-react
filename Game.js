import React from "react";

let colors = ["red", "green", "yellow", "pink", "black"];
let number = 36;
let unselectedConstant = -1;

let gameSide = 400;
let cardMargin = 3;
let cardSide =
  (100 / Math.sqrt(number) - 2 * (cardMargin / gameSide) * 100).toString() +
  "%";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: chooseArray(colors, number),
      selected: unselectedConstant,
      solved: [],
    };

    this.handleCard = this.handleCard.bind(this);
  }

  handleCard(index) {
    if (this.state.selected === unselectedConstant) {
      this.setState({ selected: index });
    } else if (
      this.state.colors[this.state.selected] === this.state.colors[index]
    ) {
      this.setState((prevState) => ({
        solved: prevState.solved.concat([this.state.selected, index]),
      }));
      this.setState({ selected: unselectedConstant });
    } else {
      this.setState({ selected: unselectedConstant });
    }
  }

  render() {
    return (
      <div className="game" style={{ height: gameSide, width: gameSide }}>
        {this.state.colors.map((color, index) => (
          <Card
            key={index}
            index={index}
            color={color}
            selected={this.state.selected === index}
            solved={this.state.solved.includes(index)}
            handleCard={this.handleCard}
          />
        ))}
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tapped: false };

    this.startFlip = this.startFlip.bind(this);
  }

  startFlip() {
    this.setState({ tapped: true });
    setTimeout(() => {
      this.setState({ tapped: false });
      this.props.handleCard(this.props.index);
    }, 1500);
  }

  render() {
    return (
      <div
        className="card"
        style={{
          background:
            this.props.solved || this.props.selected || this.state.tapped
              ? this.props.color
              : "lightblue",
          width: cardSide,
          height: cardSide,
          margin: cardMargin,
          border: this.state.tapped ? '5px skyblue solid' : ''
        }}
        onClick={this.startFlip}
      />
    );
  }
}

function chooseArray(choices, length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(choose(choices));
  }
  return array;
}

function choose(choices) {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

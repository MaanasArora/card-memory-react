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
        this.props.handleClick(this.props.index);
      }, 1500);
    }
  
    render() {
      let marginCoeff = 0.07;
  
      let size = this.props.size * (1 - 2 * marginCoeff);
      let margin = this.props.size * marginCoeff;
  
      return (
        <div
          className={this.state.tapped ? "tappedCard" : "card"}
          onClick={this.startFlip}
          style={{
            width: size,
            height: size,
            margin: margin,
            background:
              this.props.shown || this.state.tapped
                ? this.props.color
                : "lightblue",
          }}
        />
      );
    }
  }
  
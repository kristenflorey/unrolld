import React from 'react';
import FlipCard from 'react-flipcard';


var App = React.createClass({
  getInitialState() {
    return {
      isFlipped: false
    };
  },

  showBack() {
    this.setState({
      isFlipped: true
    });
  },

  showFront() {
    this.setState({
      isFlipped: false
    });
  },

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  },

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  },

  render() {
    return (
      <div>
        <FlipCard>
          <div>
            <div>Front</div>
            <div><small>(horizontal flip)</small></div>
          </div>
          <div>Back</div>
        </FlipCard>
        </div>
        )}
})

React.render(<App/>, document.getElementById('container'));

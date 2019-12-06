import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../store/app-reducers';
import { numactions } from '../store/num-reducers';

class App extends React.Component {

  changeMyName = () => {
    let words = ['foo','bar','baz'];
    let word = words[ Math.floor(Math.random()*words.length) ];
    this.props.handleChange(word);
  }

  changeMyNumber = () => {
    let nums = [8, 72, 44, 102, 90, 4];
    let num = nums[ Math.floor(Math.random()*nums.length) ];
    this.props.handleNumChange(num);
  }

  render() {
    return (
      <React.Fragment>
      <div onClick={this.changeMyName}>
        NAME: {this.props.app.name}
      </div>
      <button onClick={this.props.handleReset}>reset</button>


      <div onClick={this.changeMyNumber}>
        NUM: {this.props.number.number}
      </div>
      <button onClick={this.props.handleResetNum}>reset</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
  number: state.number
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: (newName) => dispatch(actions.nameChanger(newName)),
  handleReset: () => dispatch(actions.resetName()),
  handleNumChange: (newNum) => dispatch(numactions.numChanger(newNum)), 
  handleResetNum: () => dispatch(numactions.resetNum()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

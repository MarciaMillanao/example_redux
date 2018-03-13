import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/action';
import { INCREMENT, DECREMENT } from '../actions/actionCounter';
import PropTypes from 'prop-types';



class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(INCREMENT)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter)
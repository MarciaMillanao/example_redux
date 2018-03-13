import * as types from './actionCounter';

function increment() {
  return {
    type: types.INCREMENT
  };
}

function decrement() {
  return {
    type: types.DECREMENT
  };
}

export {increment, decrement};

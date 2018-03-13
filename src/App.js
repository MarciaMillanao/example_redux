import React, { Component } from 'react';
import Counter from './components/Counter';
import store from './store/configStore';
import{ Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;

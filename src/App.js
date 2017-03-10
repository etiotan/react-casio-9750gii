import React from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import Ui from './Components/Ui';

export default class App extends React.Component {

//render JSX starts
  render() {
    return (
      <div>
        <Calculator />
        <Ui />
    </div>

    );
  }
}

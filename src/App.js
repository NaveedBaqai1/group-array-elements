import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    const array = [1, 2, 3, 4, 5];
    const numberOfColumns = 3; 
    console.log(this.groupArrayElements(array, numberOfColumns));
  }
  groupArrayElements = (array, column) => {
    if (column < 2 || array.length < 1) return array;
    let result = [];
    let index = column < array.length ? column : array.length; // set loop index to maximum available column.
    for (index; index > 0; index--) { // reverse loop for setting right column size on each index.
      const columSize = Math.ceil(array.length / index);
      result.push(array.splice(0, columSize));
    }
    return result;
  }
  render() {
    return (
      <h1 className="App">
        check CONSOLE LOG
      </h1>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
require('./scss/indexSCSS');

class Message extends React.Component {
  render() {
    const current = new Date();
    const tipeList = ['HTML', 'CSS', 'JS', 'ReacT'];

    return (
      <div>
        <p>{current.toTimeString()}</p>
        <ul>{tipeList.map(num=><li>{num}</li>)}</ul>
      </div>
    );
  }
}

var mountNode = document.getElementById('message');

// ReactDOM.render(<Message name="Lubomir2018" />, mountNode);

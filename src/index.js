import React from 'react';
import ReactDOM from 'react-dom';
import CommentsList from './commentsList';
import CommentsForm from "./commentsForm";

require('./scss/indexSCSS');

class MainComponent extends React.Component {
  render() {

    return (
      <div className="page">
        <div className="comments-box">
            <CommentsForm />
            <CommentsList />
        </div>
      </div>
    );
  }
}

var node = document.getElementById('root');

ReactDOM.render(<MainComponent />, node);

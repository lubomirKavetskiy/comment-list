import React from 'react';

export default class CommentsTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    getCommentsCounter(comCounter) {
        if(comCounter == 0) {
            return 'No comment yet';
        } else if (comCounter == 0) {
            return '1 comments';
        } else {
            return `${comCounter} comments`;
        }
    }

    render() {
        return (
            <div className="comments-title">{this.getCommentsCounter(this.props.counter)}</div>
        );
    }
}
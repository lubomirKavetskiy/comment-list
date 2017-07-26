import React from 'react';
import Comment from './comment';
import CommentsTitle from "./comentsTitle";

export default class CommentsList extends React.Component {
    render() {
        const comments = [
            {
                name: "Коля",
                text: "Привет"
            },
            {
                name: "Петя",
                text: "Пака"
            },
            {
                name: "Саня",
                text: "До побачення"
            }
        ];

        const commentsCount=comments.length;
        let commentsList;

        if(commentsCount > 0) {
            commentsList = <ul className="comments-list">
                                {
                                    comments.map((comment, index)=>{
                                        return <Comment key={index} author={comment.name} text={comment.text} />
                                    })
                                }
                            </ul>
        }

        return (
            <div className="comments-body">
                <CommentsTitle counter={commentsCount}/>
                {/*<div className="comments-title">{commentsCount} comments</div>*/}
                <button className="button"> hide comments</button>
                {commentsList}

            </div>
        );
    }
}

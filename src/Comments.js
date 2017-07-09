import React from 'react';

function Comments(props) {
    const { comments, toggleShowComment, showComment } = props;
    
    return (
        <div>
            <button onClick={toggleShowComment}>
                {showComment ? 'Hidden' : 'Show'}
            </button>
            { showComment ? compileComments(comments) : null }
        </div>
    );
}

function compileComments(comments) {
    const isComments = comments && Array.isArray(comments);
    let arComments = '';
    const emptyTextComments = 'Комментарии отсутствуют';

    if (isComments) {
        arComments = comments.map( (comment, index) => {
            return (
                <li key={index}>
                    <b>id</b> : {comment.id} <br/>
                    <b>user</b> : {comment.user} <br/>
                    <b>text</b> : {comment.text} <br/>
                    <hr/><br/>
                </li>
            );
        });
    }


    return (
        <ul>
            { isComments ? arComments : emptyTextComments }
        </ul>
    )
}

export default Comments;
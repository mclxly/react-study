/**
*
* CommentList
*
*/

import React from 'react';

import Comment from 'components/Comment';

class CommentList extends React.Component {
  render() {
    let commentNodes = (
        '没有评论。'
    );
    if (this.props.data.length > 0) {
      commentNodes = this.props.data.map(function(comment) {
        return (
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        );
      });
    }
    return (      
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;

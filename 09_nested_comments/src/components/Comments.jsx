import React from 'react';
import CommentBox from './CommentBox';

// Helper component to render a single comment with potential nested replies
const Comments = React.memo(({ comments = [] }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <CommentBox
          key={`${comment.username}-${index}`} 
          username={comment.username} 
          comment={comment.comment} 
          replies={comment.replies} 
        />
      ))}
    </div>
  );
});

export default Comments;

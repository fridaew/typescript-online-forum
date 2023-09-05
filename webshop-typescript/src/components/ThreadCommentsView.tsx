import React, { useState, ChangeEvent } from 'react';

function ThreadCommentsView() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = async () => {
    try {
      const response = await fetch('http://localhost:8080/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: comment }), // Assuming your JSON server expects 'description' for comments
      });

      if (response.ok) {
        console.log('Comment added successfully');

        // Update the comments state with the new comment
        setComments([...comments, comment]);

        // Clear the comment input field after adding
        setComment('');
      } else {
        console.error('Error adding comment');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Comment
      </button>

      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New Comment
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Comment
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    value={comment}
                    onChange={handleCommentChange}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                CANCEL
              </button>
              <button type="button" className="btn btn-primary" onClick={handleAddComment}>
                COMMENT{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {comments.length > 0 && (
        <div className="card w-50 mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5>Comments</h5>
            </div>
            {comments.map((commentText, index) => (
              <div className="card-text border-bottom border-light my-3" key={index}>
                {commentText}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThreadCommentsView;

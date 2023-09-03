import React from 'react'

function ThreadCreationView() {
  return (

    <div>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
        NEW THREAD
      </button>


      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New Thread</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Choose the type of your thread:</label>
                  <select className="form-select" aria-label="Default select example" defaultValue="">
                    <option value="">Open this select menu</option>
                    <option value="1">Thread</option>
                    <option value="2">Q&A</option>
                  </select>

                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Description:</label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
              <button type="button" className="btn btn-primary">SEND <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreadCreationView





















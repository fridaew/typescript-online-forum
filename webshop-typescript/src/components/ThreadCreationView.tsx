import React, { useState, useEffect } from 'react';
import axios from 'axios';




interface ThreadCreationViewProps {
  setData: React.Dispatch<React.SetStateAction<Thread[]>>; 
}

function ThreadCreationView( { setData }: ThreadCreationViewProps) {

 
  // const currentUser: User = {
  //   id: 1,
  //   name: 'John Doe',
  //   userName: 'johndoe',
  // };

  const currentDate: string = new Date().toISOString();


  const [user, setUser] = useState<User>({
    id: 1,
    name: 'John Doe',
    userName: 'johndoe',
  });



  const [posts, setPosts] = useState<Thread[]>([]);
  
  const [formData, setFormData] = useState<Thread>
  ({
    id: 0,
    title: '',
    category: 'THREAD',
    creationDate: currentDate,
    description: '',
    creator: user,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      category: e.target.value as ThreadCategory,
    });
  };

  const createPost = () => {
    // Make a POST request to save the new thread on the server
    axios
      .post('http://localhost:8080/posts', formData)
      .then((response) => {
        const newThread = response.data as Thread;
        console.log('New Thread:', newThread);

       

        // Clear the form 
        setFormData({
          id: 0,
          title: '',
          category: 'THREAD',
          creationDate: currentDate,
          description: '',
          creator: user,
        });

         // Update the local state with the newly created thread
         setData((prevThreads) => [...prevThreads, newThread]);
      })
      .catch((error) => {
        console.error('Error creating thread:', error);
      });
  };
//
  useEffect(() => {
    axios
      .get('http://localhost:8080/posts')
      .then((response) => {
        const fetchedThreads = response.data;
        setPosts(fetchedThreads);
      })
      .catch((error) => {
        console.error('Error fetching threads:', error);
      });
  }, []);






  

  return (
    <div>
      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
        NEW THREAD
      </button>

      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New Thread</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Choose the type of your thread:</label>
                  <select className="form-select" id="category" name="category" value={formData.category} onChange={handleCategoryChange}>
                    <option value="THREAD">Thread</option>
                    <option value="QNA">Q&A</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title:</label>
                  <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleInput} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description:</label>
                  <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleInput}></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
              <button type="button" className="btn btn-primary" onClick={createPost}>
                SEND <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreadCreationView;























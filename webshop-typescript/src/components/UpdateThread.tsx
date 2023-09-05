
import { useState, useEffect } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface ThreadCreationViewProps2 {
    setData: React.Dispatch<React.SetStateAction<Thread[]>>; 
  }


const UpdateThread = ({setData}: ThreadCreationViewProps2) => {

  const { id } = useParams();

const [threadData, setThreadData] = useState({
  title: '',
  category: 'THREAD',
  description: '',
});


  useEffect(() => {

    axios
   
      .get(`http://localhost:8080/posts/${id}`)
      .then((response) => {
        const fetchedThreads = response.data;
        setThreadData(fetchedThreads);
        console.log(fetchedThreads);
      })
      .catch((error) => {
        console.error('Error fetching threads:', error);
      });
    
 
  }, [id]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setThreadData({
      ...threadData,
      [name]: value,
    });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setThreadData({
      ...threadData,
      category: e.target.value as ThreadCategory,
    });
  };


  const updateThread2 = async () => {


    console.log('updateThread2 called');
  try {
    const response = await axios.put(`http://localhost:8080/posts/${id}`, threadData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      console.error('Error:', response);
      throw new Error('Failed to update thread');
    }

    const updatedThread = response.data;
    console.log('Updated Thread:', updatedThread);

    // Clear the form data and update the state with the updated thread
    setThreadData({
      title: '',
      category: 'THREAD',
      description: '',
    });



    // Update the list of threads with the updated thread
    setData((prevThreads) => [...prevThreads, updatedThread]);
  } catch (error) {
    console.error('Error:', error);
  }
};




  

  return (
    <div>
    <div className='thread-btn'>  <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
      UPDATE THREAD
    </button></div>
  

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
                <select className="form-select" id="category" name="category" value={threadData.category} onChange={handleCategoryChange}>
                  <option value="THREAD">Thread</option>
                  <option value="QNA">Q&A</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" className="form-control" id="title" name="title" value={threadData.title} onChange={handleInput} />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description:</label>
                <textarea className="form-control" id="description" name="description" value={threadData.description} onChange={handleInput}></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
            <button type="button" className="btn btn-primary" onClick={updateThread2} data-bs-dismiss='modal'>
              SEND <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
  }

export default UpdateThread
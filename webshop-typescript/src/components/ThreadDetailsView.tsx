import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ThreadCommentsView from './ThreadCommentsView';
import UpdateThread from './UpdateThread';


import axios from 'axios'

export interface ThreadDetailsProps {
  id: string;
  title: string;
  description: string;
  category: string;
  creator: {
    userName: string;
  }
}



const ThreadDetailsView: React.FC<ThreadDetailsProps> = () => {
  const { id } = useParams();
  const [threadData, setThreadData] = useState<ThreadDetailsProps | null>(null);




  const [data, setData] = useState<Thread[]>([])
  const [comments, setComments] = useState<Comment[]>([]);
  console.log(comments);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/posts/${id}`);
        setThreadData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching thread data:', error);
      }
    };

    fetchData()
  }, [id]);


    const deleteThread = async (id: string) => {
      try {
        const res = await axios.delete(`http://localhost:8080/posts/${id}`)
        console.log(res)
        setThreadData(null)
        
      } catch (err) {
        console.log(err);
      }

    }

  return (
    <>
    <UpdateThread setData={setData}/>
    <div className="thread-wrapper d-flex justify-content-center align-items-center flex-column my-3">
      {threadData && (
        <div className="card w-50 mb-3">
          <div className='card-body'>
            <div className='d-flex justify-content-between'>
              <h5 className="card-title">{threadData.title}</h5>
              <h5 className='card-title'>{threadData.category}</h5>
            </div>
            <p className='card-text'>u/{threadData.creator.userName}</p>
            <div className="d-flex justify-content-between">
            <p className="card-text">{threadData.description}</p>
              <button className="btn btn-danger" onClick={() => deleteThread(threadData.id)} type="button">Delete</button>
            </div>
          </div>
        </div>
      )}
      <ThreadCommentsView threadData={threadData} />
    </div>
    </>
  );
};

export default ThreadDetailsView;



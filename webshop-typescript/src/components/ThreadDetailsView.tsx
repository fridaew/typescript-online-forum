import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ThreadCommentsView from './ThreadCommentsView';

interface ThreadDetailsProps {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/posts/${id}`);
        const data = await response.json();
        setThreadData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching thread data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="thread-wrapper d-flex justify-content-center align-items-center flex-column my-3">
      {threadData && (
        <div className="card w-50 mb-3">
          <div className='card-body'>
            <div className='d-flex justify-content-between'>
            <h5 className="card-title">{threadData.title}</h5>
            <h5 className='card-title'>{threadData.category}</h5>
            </div>
            <p className='card-text'>u/{threadData.creator.userName}</p>
            <p className="card-text">{threadData.description}</p>
            {/* <p className="card-text">{threadData.description}</p> */}
          </div>
        </div>
      )}
      {/*<button className='btn'>Comment</button>*/}
      <ThreadCommentsView />
    </div>
  );
};

export default ThreadDetailsView;
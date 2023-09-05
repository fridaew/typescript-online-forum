import { useEffect, useState } from 'react';
import axios from 'axios';
import ThreadCreationView from './ThreadCreationView'
import ThreadDetailsView from './ThreadDetailsView';
import { Link } from 'react-router-dom';

const ThreadListView = () => {

  const [data, setData] = useState<Thread[]>([])

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:8080/posts');
      setData(res.data)
      console.log(res.data);
    } catch (error) {
      console.log('Error when fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ThreadCreationView setData={setData}/>
      <div className="thread-wrapper d-flex justify-content-center align-items-center flex-column my-3">
        {data.map(thread => (
        <Link to={`/thread/${thread.id}`} className="card w-50 mb-3" key={thread.id}>
          <div className="card-body">
            <div className='d-flex justify-content-between'>
              <h5 className="card-title">{thread.title}</h5>
              <h5 className='card-title'>{thread.category}</h5>
            </div>
            <p className="card-text thread-description">{thread.description}</p>
          </div>
        </Link>
        ))}
      </div>
    </div>
  ) 
  
}

export default ThreadListView;
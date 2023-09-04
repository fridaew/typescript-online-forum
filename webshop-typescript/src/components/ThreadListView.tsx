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
      <ThreadCreationView/>
      <div className="thread-wrapper d-flex justify-content-center align-items-center flex-column my-3">
        {data.map(thread => (
        <Link to={`/thread/${thread.id}`} className="card w-75 mb-3" key={thread.id} title={thread.title}>
          <div className="card-body">
            <h5 className="card-title">{thread.title}</h5>
            <p className="card-text">{thread.description}</p>
            {/* <ThreadDetailsView title={thread.title} description={thread.description} /> */}
          </div>
        </Link>
        ))}
      </div>
    </div>
  ) 
  
}

export default ThreadListView;
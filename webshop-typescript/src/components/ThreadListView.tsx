import { useEffect, useState } from 'react';
import axios from 'axios';
import ThreadCreationView from './ThreadCreationView'

const ThreadListView = () => {

  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/posts');
      setData(res.data)
      console.log(res);
    } catch (error) {
      console.log('Error when fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>
    
    <ThreadCreationView/>
    <div className="thread-wrapper d-flex justify-content-center">
      <div className="card w-75 mb-3">
        <div className="card-body">
          <h5 className="card-title">I'm really struggling with TypeScript. Help me, someone.</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro labore hic quo iure recusandae quam libero fugit, autem tenetur iste ad nisi, quidem corporis tempora beatae ab! Rerum, soluta voluptatum?</p>
        </div>
      </div>
    </div>
  </div>;
};

export default ThreadListView;
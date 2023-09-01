// import React, { useState } from 'react';
// import axios from 'axios';

// const Post: React.FC = () => {
//   const [post, setPost] = useState<Thread>({
//     id: 0,
//     title: '',
//     body: '',
//     creationDate: '',
// 	description: '',
//   });

//   const handleSubmit = () => {
//     axios.post('https://jsonplaceholder.typicode.com/posts', post)
//       .then((response) => {
//         console.log('Post created:', response.data);
//       })
//       .catch((error) => {
//         console.error('Error creating post:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Post Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={post.title}
//             onChange={(e) => setPost({ ...post, title: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Body:</label>
//           <textarea
//             value={post.body}
//             onChange={(e) => setPost({ ...post, body: e.target.value })}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Post;

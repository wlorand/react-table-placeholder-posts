// import React from 'react'; // not needed in v17
import { useState } from 'react';

// styles
import './styles/app.css';

const initialPosts = [
  { id: 301, title: 'first post', body: 'hello world' },
  { id: 302, title: 'first post', body: 'hello world' },
  { id: 303, title: 'first post', body: 'hello world' },
];

function App() {
  const [posts] = useState(initialPosts);

  return (
    <div>
      <header className="app-header">
        <h1>React Table Placeholder Posts</h1>
      </header>
      <table border="1px">
        {posts.map((post, i) => (
          <tr key={i}>
            <td width="200px">{post.id}</td>
            <td width="200px">{post.title}</td>
            <td width="200px">{post.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;

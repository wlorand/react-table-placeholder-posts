// import React from 'react'; // not needed in v17
import { useState, useEffect } from 'react';

import axios from 'axios';

// styles
import './styles/app.css';

function App() {
  const [posts] = useState([1, 2, 3]);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  // useEffect as mimick of componentDidMount
  // -- use it here first w/o useState for starters (likely storing in state next)
  useEffect(() => {
    // fetch with axios and log data
    const fetchData = async (query) => {
      const result = await axios.get(query);
      console.log(result.data); // axios result object also has status and lots more
    };
    // invoke
    fetchData(url);
  }, []); // empty dependency array means just runs once onLoad aka componentDidMount

  return (
    <div>
      <header className="app-header">
        <h1>React Table Placeholder Posts</h1>
      </header>
      {posts.map((post, i) => (
        <p key={i}>{post}</p>
      ))}
    </div>
  );
}

export default App;

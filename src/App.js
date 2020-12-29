// import React from 'react'; // not needed in v17
import { useState, useEffect } from 'react';

// data fetching libs
import axios from 'axios';

// data rendering libs
// import { useTable } from 'react-table'; // v7
import ReactTable from 'react-table'; // v6

// styles -- no react-table css needed for v7
import 'react-table/react-table.css'; // v6 only - this throws not found error in v7
import './styles/app.css';

function App() {
  // TODO: move to services/fetchApiData.js and import here
  const [posts, setPosts] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  // useEffect as mimick of componentDidMount
  // -- use it here first w/o useState for starters (likely storing in state next)
  useEffect(() => {
    // fetch with axios and log data
    // -- todo: put this in a services file and invoke from there
    const fetchData = async (query) => {
      const result = await axios.get(query);
      console.log(result.data instanceof Array); // axios result object also has status and lots more
      // store in state
      setPosts(result.data);
    };
    // invoke
    fetchData(url);
  }, []); // empty dependency array means just runs once onLoad aka componentDidMount

  // define table columns - key step for react-table
  const columns = [
    { Header: 'User ID', accessor: 'userId' },
    { Header: 'ID', accessor: 'id' },
    { Header: 'Title', accessor: 'title' },
    { Header: 'Content', accessor: 'body' },
  ];

  return (
    <div>
      <header className="app-header">
        <h1>React Table Placeholder Posts</h1>
      </header>
      {/* TODO: move the ReactTable to its own component */}
      {/* easy-peasy v6 version -- has default UI for pagination, sorting out of the box */}
      <ReactTable columns={columns} data={posts} />
    </div>
  );
}

export default App;

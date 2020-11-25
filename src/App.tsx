import React from 'react';
import './App.css';
import SongTable from './components/SongTable';
import AddSongForm from './components/AddSongForm';

function App() {
  return (
    <div className="App">
      <div className='text-center mt-3'>
        <h1>AWS Simple Web App Demo</h1>
        <h5 className='mt-5'>Below is a Table of Songs loaded from a DynamoDB Table from AWS</h5>
        <h5>The data is requested via API Gateway</h5>
        <h5>This Web Server is hosted using {process.env.REACT_APP_HOSTING_SERVICE || '<Unknown>'}</h5>
      </div>
      <div className='col-6 mx-auto'>
        <SongTable/>
      </div>
      <div className='col-5 mx-auto mt-5'>
        <AddSongForm/>
      </div>
    </div>
  );
}

export default App;

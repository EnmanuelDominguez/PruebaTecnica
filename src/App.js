import React, { Fragment, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import UsersList from './Components/UsersList';

function App() {

  useState [users, setusers] = useState(initialState)

  return (
    <Fragment>
      <Navbar brand="New InnTech App" />
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <h2 style={{textAlign: 'center'}}>Users List</h2>
            <UsersList/>
          </div>
          <div className='col-sm'>
            <h2 style={{textAlign: 'center'}}>Users Form</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

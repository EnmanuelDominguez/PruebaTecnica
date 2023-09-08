import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import UsersList from './Components/UsersList/UsersList';
import Form from './Components/Form/Form';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = () => {
      fetch('http://localhost:8080/api')
        .then(res => res.json())
        .then(res => setUsers(res))
    }
    getUsers()
  }, [])

  return (

    <Fragment>
      <Navbar brand="New InnTech App" />
      <div className='container-body'>
        <div className='row'>
          <div className='col-sm'>
            <h2 style={{ textAlign: 'center' }}>Users List</h2>
            <UsersList users={users} />
          </div>
          <div className='col-sm'>
            <h2 style={{ textAlign: 'center' }}>Users Form</h2>
            <Form />
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;

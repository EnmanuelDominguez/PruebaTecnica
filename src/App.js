import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import UsersList from './Components/UsersList/UsersList';
import Form from './Components/Form/Form';

function App() {

  const [user, setUser] = useState({
    user_email: '',
    username: '',
    user_password: '',
    firstname: '',
    lastname: '',
    phone_number: 0,
    address: ''
  });

  const [users, setUsers] = useState([])

  const [listUpdated, setListUpdated] = useState(false);

  useEffect(() => {
    const getUsers = () => {
      fetch('http://localhost:8080/api')
        .then(res => res.json())
        .then(res => setUsers(res))
    }
    getUsers()
    setListUpdated(false)
  }, [listUpdated])

  return (

    <Fragment>
      <Navbar brand="New InnTech App" />
      <div className='container-body'>
        <div className='row'>
          <div className='col-sm'>
            <h2 style={{ textAlign: 'center' }}>Users List</h2>
            <UsersList user={user} users={users} setListUpdated={setListUpdated}/>
          </div>
          <div className='col-sm'>
            <h2 style={{ textAlign: 'center' }}>Users Form</h2>
            <Form user={user} setUser={setUser}/>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;

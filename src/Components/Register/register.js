import React, { Fragment, useState, useEffect } from 'react';
import './Register.css';
import Form from '../Form/Form';

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

    const [, setUsers] = useState([])

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
            <div className='fixer'>
                <div className='container-body'>
                    <div className='row'>
                        <div className='col-sm'>
                            <h2 style={{ textAlign: 'center' }}>Users Register</h2>
                            <Form user={user} setUser={setUser} />
                            <p class="small fw-bold mt-2 pt-1 mb-0"><a href="/" class="link-danger">Back to Login </a></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default App;

import React from 'react';
import './UsersList.css'

const UsersList = ({ user, setUser, users, setListUpdated }) => {

    const handleDelete = iduser => {
        //Data Query DELETE
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:8080/api/' + iduser, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
        alert('Data deleted successfully.')

        //State Update for table reload
        setListUpdated(true)
    }

    const handleUpdate = iduser => {

        //Data checkout
        if (user.user_email === '' || user.username === '' || user.user_password === '' || user.firstname === '' || user.lastname === '') {
            alert('Required fields need to be filled.')
        } else {
            //Data Query UPDATE
            const requestInit = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            }
            fetch('http://localhost:8080/api/' + iduser, requestInit)
                .then(res => res.text())
                .then(res => console.log(res))
            alert('Data updated successfully.')
        }

            //State Update for table reload
            setListUpdated(true)
        
    }

    return (
        <table className='table'>
            <thead>
                <tr className='tableheaderdesign'>
                    <th>ID</th>
                    <th>User_email</th>
                    <th>Username</th>
                    <th>User_password</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.iduser} className='tabledesign'>
                        <td>{user.iduser}</td>
                        <td>{user.user_email}</td>
                        <td>{user.username}</td>
                        <td>{user.user_password}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.phone_number}</td>
                        <td>{user.address}</td>
                        <th>
                            <div className='mb-8'>
                                <button onClick={() => handleDelete(user.iduser)} className='btn btn-danger'>Delete</button>
                            </div>
                            <div className='mb-8'>
                                <button onClick={() => handleUpdate(user.iduser)} className='btn btn-dark'>Update</button>
                            </div>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UsersList;
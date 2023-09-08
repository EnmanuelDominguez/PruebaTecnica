import React from 'react';
import './UsersList.css'

const UsersList = ({ users, setListUpdated }) => {

    const handleDelete = iduser => {
        //Data Query
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:8080/api/' + iduser, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
            alert('Datos eliminados con éxito.')

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
                    </th>
                </tr>
            ))}
        </tbody>
    </table>
);
}

export default UsersList;
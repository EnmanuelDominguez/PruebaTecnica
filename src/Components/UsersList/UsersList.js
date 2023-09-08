import React from 'react';

const UsersList = ({users}) => {
    return (
        <table className='table'>
            <thead>
                <tr>
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
                    <tr key={user.iduser}>
                        <th>{user.iduser}</th>
                        <th>{user.user_email}</th>
                        <th>{user.username}</th>
                        <th>{user.user_password}</th>
                        <th>{user.firstname}</th>
                        <th>{user.lastname}</th>
                        <th>{user.phone_number}</th>
                        <th>{user.address}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UsersList;
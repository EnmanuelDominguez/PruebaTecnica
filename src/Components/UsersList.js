import React from 'react';

const UsersList = () => {
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
            </tbody>
        </table>
     );
}
 
export default UsersList;
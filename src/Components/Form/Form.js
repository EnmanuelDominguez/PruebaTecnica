import React from 'react';
import './Form.css'

const form = ({ user, setUser }) => {

    //Save fields information while typing function
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    let { user_email, username, user_password, firstname, lastname, phone_number} = user

    const handleSubmit = () => {
        //Data checkout
        if (user.user_email === '' || user.username === '' || user.user_password === '' || user.firstname === '' || user.lastname === '') {
            alert('Required fields need to be filled.')
        } else {

        //Data Query POST
            const requestInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            }
            fetch('http://localhost:8080/api', requestInit)
                .then(res => res.text())
                .then(res => console.log(res))
                alert('Data loaded successfully.')
        }
        //Data State Reset
        setUser({
            user_email: '',
            username: '',
            user_password: '',
            firstname: '',
            lastname: '',
            phone_number: 0,
            address: ''
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-7'>
                <label htmlFor="user_email" className='form-label'>User_email</label>
                <input value={user_email} name="user_email" onChange={handleChange} type="text" id="user_email" className='form-control' />
            </div>
            <div className='mb-7'>
                <label htmlFor="username" className='form-label'>Username</label>
                <input value={username} name="username" onChange={handleChange} type="text" id="username" className='form-control' />
            </div>
            <div className='mb-7'>
                <label htmlFor="user_password" className='form-label'>User_password</label>
                <input value={user_password} name="user_password" onChange={handleChange} type="text" id="user_password" className='form-control' />
            </div>
            <div className='mb-7'>
                <label htmlFor="firstname" className='form-label'>First Name</label>
                <input value={firstname} name="firstname" onChange={handleChange} type="text" id="firstname" className='form-control' />
            </div>
            <div className='mb-7'>
                <label htmlFor="lastname" className='form-label'>Last Name</label>
                <input value={lastname} name="lastname" onChange={handleChange} type="text" id="lastname" className='form-control' />
            </div>
            <div className='mb-7'>
                <label htmlFor="phone_number" className='form-label'>Phone Number</label>
                <input value={phone_number} name="phone_number" onChange={handleChange} type="number" id="phone_number" className='form-control' />
            </div>
            <div className='mb-7'>
                <label htmlFor="address" className='form-label'>Address</label>
                <input name="address" onChange={handleChange} type="text" id="address" className='form-control' />
            </div>
            <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default form;
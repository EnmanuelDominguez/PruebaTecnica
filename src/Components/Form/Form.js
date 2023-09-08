import React from 'react';
import './Form.css'

const form = () => {
    return ( 
        <form>
            <div className='mb-7'>
                <label htmlFor="user_email" className='form-label'>User_email</label>
                <input type="text" id="user_email" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" id="username" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="user_password" className='form-label'>User_password</label>
                <input type="text" id="user_password" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="firstname" className='form-label'>First Name</label>
                <input type="text" id="firstname" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="lastname" className='form-label'>Last Name</label>
                <input type="text" id="lastname" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="phone_number" className='form-label'>Phone Number</label>
                <input type="number" id="phone_number" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="address" className='form-label'>Address</label>
                <input type="text" id="address" className='form-control'/>
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
     );
}
 
export default form;
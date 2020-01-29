import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './SignUp.css'
//create fetch for API to users
//create test suite

class SignUp extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        }
    }

    state = { error: null }


    render() {
        return (
            <div className='signup-form'>
                <h2 className='signup-title'>Sign Up Here</h2>
                <NavBar />
                <form className='signup-form-box' onSubmit={this.handleSubmit}>
                    <div className='signup-field'>
                        <label
                            htmlFor='first_name'
                            className='signup_label'
                        >First Name</label>
                        <input
                            className='signup_input'
                            type='text'
                            name='first_name'
                            id='first_name'
                            placeholder='First Name'
                        />
                    </div>
                    <div className='signup-field'>
                        <label
                            htmlFor='last_name'
                            className='signup_label'
                        >Last Name</label>
                        <input
                            className='signup_input'
                            type='text'
                            name='last_name'
                            id='last_name'
                            placeholder='Last Name'
                        />
                    </div>
                    <div className='signup-field'>
                        <label
                            htmlFor='email'
                            className='signup_label'
                        >Email Address</label>
                        <input
                            className='signup_input'
                            type='text'
                            name='email'
                            id='email'
                            placeholder='Email'
                        />
                    </div>
                    <div className='signup-field'>
                        <label
                            htmlFor='password'
                            className='signup_label'
                        >Password</label><br />
                        <input
                            className='signup_input'
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Password'
                        />
                    </div>
                    <div className='signup-password-req'>
                        <strong>
                            Important Password requirements:<br />
                            Must be between 8 and 50 characters<br />
                            Must not begin or end with a space<br />
                            Must contain an uppercase, lowercase, number and special character
                  </strong>
                    </div>
                    <button className='submit-btn' type='submit' value='SignUp'>
                        Sign Up
              </button>
                </form>
                <div className='error-message'>
                    <strong>
                        {this.state.error}
                    </strong>
                </div>
            </div>
        )
    };

}
export default SignUp
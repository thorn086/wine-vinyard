import React from 'react'
import './Login.css'
import NavBar from '../../components/NavBar/NavBar'
class Login extends React.Component{
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        }
      }
      render() {
        return (
          <div className='login-form'>
              <h2>Login Form</h2>
              <NavBar />
            <form
              id='log-in'
              //onSubmit={--create submit handler--}
            >
              <div className='username-login'>
                <div className='login_demo-creds'>
                  <strong>
                    Demo credentials: winelover81@gmail.com / Wine@ful1!
                  </strong>
                </div>
                <label htmlFor='username-login'>Email Address</label>
                <input type='email' name='email' id='username-login' required />
              </div>
              <div className='password-login'>
                <label htmlFor='password-login'>Password</label>
                <input type='password' name='password' id='password-login' required />
              </div>
              <div>
                <button className='btn-submit' type='submit' value='LogIn'>
                  Log In
                </button>
                <button className='btn-back-login' tag='button' onClick={() => this.props.history.goBack()}>Back</button>

              </div>
            </form>
            <div className='error-message'>
              <strong>
                {//create error message}
                }         </strong>
            </div>
          </div>
        )
      };

}
export default Login
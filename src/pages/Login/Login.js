import React from 'react'
import './Login.css'
import NavBar from '../../components/NavBar/NavBar'
import TokenService from '../../services/token-services'
import ApiAuthService from '../../services/api-auth-service'
class Login extends React.Component{
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        }
      }
      state = { error: null }

      handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/wine'
        history.push(destination)
      };

      handleSubmitWithAuth=e=>{
        e.preventDefault()
        this.setState({ error: null })
        const { email, password } = e.target
        ApiAuthService.postLogin({
          user_email: email.value,
          password: password.value
        })
          .then(res => {
            email.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            TokenService.saveUserId(res.userId)
            this.handleLoginSuccess()
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      };

      render() {
        return (
          <div className='login-form'>
              <h2>Login Form</h2>
              <NavBar />
            <form
              id='log-in'
              onSubmit={this.handleSubmitWithAuth}
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
                {this.state.error}</strong>
            </div>
          </div>
        )
      };

}
export default Login
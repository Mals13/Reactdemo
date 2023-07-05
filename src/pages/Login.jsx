import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <>

            <div className='maincont'>
                <div className='lo'>Login</div>
                <form className='form'>
                    <label htmlFor='email'>Email:</label><br></br>
                    <input type='email' /><br></br>
                    <br></br><label htmlFor='password'>Password:</label><br></br>
                    <input type='password' /><br></br><br></br>
                    <br></br><button type="submit" value="Submit">Submit</button>
                    <div className='chk'>
                        <br></br><input type='checkbox' />&nbsp;&nbsp;Show Password<br></br>
                    </div>
                    <div className='last'>
                        <br></br><span class="psw">Forgot <a href="#">password?</a></span><br></br>
                        <span class="dont">Don't have an account? <a href="#">Sign up</a></span>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Login
import LoginForm from "../components/LoginForm"
import '../components/Design.css'
import {loginUser} from "../store/actions"
import React from 'react'
import {Context} from "../store"
import {useContext} from 'react'
import {logoutUser} from "../store/actions"
import {Button} from 'antd'
import {LogoutOutlined} from '@ant-design/icons'

function Login(){

    const [state, dispatch] = useContext(Context)
    
    function logOutUser(){

        alert("Logged out!");
        dispatch(logoutUser());
    
    }

    function loginHandler(data){

        dispatch(loginUser(data))

    }
    
    if (!state.auth.token) {

    return(

        <div>
            <br />
            <br />
            <h1>Login</h1>
            <div>
            <LoginForm onLoginUser={loginHandler}/>
            </div>
        </div>
        
        )

    } else {

        return(

        <div>
            <br />
            <br />
            <h1>Log out</h1>
            <br />
            <div className="userLogout">
            <Button style={{color:'#FFFFFF', backgroundColor: '#1890ff'}} 
            onClick={() => logOutUser()}><LogoutOutlined />Log out</Button>
            </div>
        </div>

        )
    }
}

export default Login
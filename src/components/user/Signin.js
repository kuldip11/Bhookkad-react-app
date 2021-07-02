import React,{useState} from 'react'
import { message } from 'antd';
import "./signin.css"

function Signup() {

    const [user, setUser] = useState({name:"", email:"", password:""})
    const loginHandler = () => {
        if(!(user.email.includes(".com"))){
            message.error('Please enter the valid email')
            setUser({...user,email:"", password:""})
        }
        else if(user.password.length <8){
            message.error('Password is not Strong')
            setUser({...user, password:""})
        }
        else{
            message.warning('DataBase is Not Connected')
            setUser({name:"", email:"", password:""})
        }
    }
    return (
        <div className="signin">
            <input type="text" className="input" placeholder="Email" onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
            <input type="password" className="input" placeholder="Password"onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
            <button onClick={loginHandler}>Register</button>
        </div>
    )
}

export default Signup

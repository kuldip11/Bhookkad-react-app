import React,{useState} from 'react'
import { message } from 'antd';
import "./signup.css"

function Signup() {

    const [user, setUser] = useState({name:"", email:"", password:""})
    const registerHandler = () => {
        if(user.name.length < 2){
            message.error('Please enter the valid name')
            setUser({...user,name:""})
        }
        else if(!(user.email.includes(".com"))){
            message.error('Please enter the valid email')
            setUser({...user,email:"", password:""})
        }
        else if(user.password.length <8){
            message.error('Password is not Strong')
            setUser({...user, password:""})
        }
        else{
            message.success('Register sucessfuly');
            setUser({name:"", email:"", password:""})
        }
    }
    return (
        <div className="signup">
            <input type="text" placeholder="Name" onChange={(e)=>{setUser({...user,name:e.target.value})}}/>
            <input type="text" placeholder="Email" onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
            <input type="password" placeholder="Password"onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
            <button onClick={registerHandler}>Register</button>
        </div>
    )
}

export default Signup

import React,{useState} from 'react'
import "../styles/contactus.css"
import { message } from 'antd';
const ContactUs = () => {

    const [feedback, setfeedback] = useState({name:"", email:"", Comment:""})
    const sendFeedbackHandler = () => {
        if(feedback.name.length < 2){
            message.error('Please enter the valid name')
        }
        else if(!(feedback.email.includes(".com"))){
            message.error('Please enter the valid email')
        }
        else if(feedback.comment === ""){
            message.error('Add some comment for feedback')
        }
        else{
            message.error('Thanks for your feedback')
            setfeedback({name:"",email:"", password:""})
        }
    }

    return (
        <div style={{display:"flex", flexDirection:"column", textAlign:"center",alignItems:"center"}}>
            <h1>Feedback</h1>
            <input type="text" placeholder="Name" onChange={(e)=>{setfeedback({...feedback,name:e.target.value})}}/>
            <input type="text" placeholder="Email" onChange={(e)=>{setfeedback({...feedback,email:e.target.value})}}/>
            <textarea type="textarea" placeholder="Feedback" onChange={(e)=>{setfeedback({...feedback,comment:e.target.value})}}/>
            <button onclick={()=>sendFeedbackHandler}>Send</button>
        </div>
    )
}

export default ContactUs
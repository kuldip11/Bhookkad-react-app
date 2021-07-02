import React,{useState} from 'react'
import "./user.css"
import Signin from './Signin'
import Signup from './Signup'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const User = () => {
    const [state,setState] = useState("Signup")
    return (
        <div className="user">
            <Router >
                <div style={{display:"flex",  justifyContent:"flex-start", flexDirection:"row-reverse", alignItems:"flex-start"}}>
                    <Link to="/signin" className={state==="Signin" ? "link cli" : "link"} onClick={()=>{setState("Signin")}}>
                        Sign in
                    </Link>
                    <Link to="/signup" className={state==="Signup" ? "link cli" : "link"} onClick={()=>{setState("Signup")}}>
                        Sign up 
                    </Link>
                </div>                    
                <Switch>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/signin">
                        <Signin />
                    </Route>
                </Switch>
            </Router>
            {/* {state==="signup" ? <Signup/> : <Signin/> } */}
        </div>
    )
}

export default User

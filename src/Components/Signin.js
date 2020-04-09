import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import SignUp from "./Signup";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Showmovies from './Showmovies'


import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
;
 class Signin extends Component {
    data;
    constructor(props) {
        super(props)
        this.state = {
            
            submit: false,
            role:''
           
        }
     
    }
    handleSubmit =  () => {
        
        if(this.props.email.length<=0)
        {
            ToastsStore.warning('Email should be valid email')
            document.getElementById("mail").focus()      
        }
        else {
           this.data=JSON.parse(localStorage.getItem(this.props.email))
            if(this.data.password===this.props.password)
            {
                if(this.data.role===this.props.role)
                {  
                    if(this.props.role==="Admin"){
                        this.props.setAdmin(true)
                    }  
                               
                    
                    ToastsStore.success("Login Successfull")
                        this.props.setSuccess(true)
                        this.setState({submit:true})
                      
                }
                else{
                    ToastsStore.warning('Role is incorrect')
                }
            }
            else{
                ToastsStore.warning('Password is incorrect')
            document.getElementById("pass").focus()  
            }
        }
        
        
       
    }
    
    render() {
        let takey=["Admin","User"]
       
        return (
          
            <div>
                {!this.state.submit?
                <form >
                    <div>
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" id="mail" className="form-control" placeholder="Enter email" value={this.props.email} onChange={this.props.setEmail} autoComplete='on' />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" id="pass"className="form-control" placeholder="Enter password" value={this.props.password} onChange={this.props.onPasswordChange} autoComplete='off' />
                        </div>
                        <Dropdown id="role" options={takey}  onChange={this.props.setRole }
                                  value={this.props.role}              placeholder="Select Role" />
                        <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                        <p className="forgot-password text-right">
                            Not Registered? <Link className="nav-link" to="/signup">SignUp</Link>
                        </p>
                    </div>
                </form>
                :<Redirect to={ `/addmovie`} />
                 } 
              
            </div>
           
        );
    }
}
 
export default Signin;
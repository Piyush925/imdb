import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import 'react-dropdown/style.css';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
 class AddActress extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
       
        
    }
    handleSubmit = () => {
        if(this.props.name.length<=0)
        {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("name").focus()
        }
        else if(this.props.age.length<=0){
            ToastsStore.warning('Age is Mandatory')
            document.getElementById("age").focus()
        }
        else{
            ToastsStore.success("Actress Added successfully")
        }
        
         
    }
    render() {
        
        return (
            <div>
                <form>
                                    <div>
                        <h3>Add Actress</h3>
                        <div className="form-group">
                            <label>Actress Name</label>
                            <input type="text" id='name' className="form-control" placeholder="Actress name" onChange={this.props.onNameChange} value={this.props.name}  title="Must be Alphabet"  required />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="number" id='age' className="form-control" placeholder="Age" onChange={this.props.onAgeChange} value={this.props.age}  title="Must be Alphabet"  required />
                        </div>
                        
                        <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Add Actor</button>
                        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                       
                    </div>
                    </form>
               
            </div>
        );
    }
}

export default AddActress;

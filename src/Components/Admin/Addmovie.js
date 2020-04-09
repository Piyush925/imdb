import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import 'react-dropdown/style.css';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
 class Addmovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
            submit: false
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    handleSubmit = () => {
        if(this.props.name.length<=0)
        {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("mname").focus()
        }
        else if(this.props.year.length<=0){
            ToastsStore.warning('Year is Mandatory')
            document.getElementById("ryear").focus()
        }
        else if(this.props.producer.length<=0){
            ToastsStore.warning('Producer is Mandatory')
            document.getElementById("producer").focus()
        }
        else if(this.props.director.length<=0){
            ToastsStore.warning('Director is Mandatory')
            document.getElementById("director").focus()
        }
        else if(this.props.actors.length<=0){
            ToastsStore.warning('Actors is Mandatory')
            document.getElementById("actor").focus()
        }
        else if(this.props.actress.length<=0){
            ToastsStore.warning('Actress is Mandatory')
            document.getElementById("actress").focus()
        }
        
       
       
        else{
            ToastsStore.success("Movie Added successfully")
        }
         
    }
    render() {
        
        return (
            <div>
                
                                    <div>
                        <h3>Add Movie</h3>
                        <div className="form-group">
                            <label>Movie Name</label>
                            <input type="text" id='mname' className="form-control" placeholder="Movie name" onChange={this.props.onMovieNameChange} value={this.props.name}  title="Must be Alphabet"  required />
                        </div>
                        <div className="form-group">
                            <label>Release Year</label>
                            <input type="text" id='ryear' className="form-control" placeholder="Release name" onChange={this.props.onYearChange} value={this.props.year}  title="Must be Alphabet"  required />
                        </div>
                        <div className="form-group">
                            <label>Producer</label>
                            <input type="text" id='producer' className="form-control" placeholder="Enter Producer Name" onChange={this.props.onProducerChange} value={this.props.producer} required/>
                        </div>
                        <div className="form-group">
                            <label>Director</label>
                            <input type="text" id="director" className="form-control" placeholder="Enter Director Name" onChange={this.props.onDirectorChange} value={this.props.director} required/>
                        </div>
                        <div className="form-group">
                            <label>Actors</label>
                            <input  id="actor" className="form-control" placeholder="Enter Actors" onChange={this.props.onActorInputChange} defaultValue={this.props.actorinput} />
                            <button onClick={this.props.setActors}>Add</button>
                            <ul>
                            {this.props.actors.map((item,key)=>{
                                return <li>{item}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label onClick={()=>{this.props.delActors(key);this.setState({input:this.state.input})}}>X</label> </li>
                            })}
                            </ul>
                        </div>
                        <div className="form-group">
                            <label>Actress</label>
                            <input  id="actress" className="form-control" placeholder="Enter Actress" onChange={this.props.onActressInputChange} defaultValue={this.props.actressinput} />
                            <button onClick={this.props.setActress}>Add</button>
                            <ul>
                            {this.props.actress.map((item,key)=>{
                                return <li>{item}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label onClick={()=>{this.props.delActress(key);this.setState({input:this.state.input})}}>X</label> </li>
                            })}
                            </ul>
                        </div>
                        
                        <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Add Movie</button>
                        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                       
                    </div>
                   
               
            </div>
        );
    }
}

export default Addmovie;
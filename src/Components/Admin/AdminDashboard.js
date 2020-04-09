import React from 'react';
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';

import Addmovie from './Addmovie'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';


import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddActors from './AddActors';
import AddActress from './AddActress'
import AddDirector from './AddDirector';
import AddProducer from './AddProducer';



class AdminDashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            limit: 5,
            activec: 1,
            toggle: false
        }
    }
    render() {
        if (this.props.success) { ToastsStore.success("Login Successfull") }

        return (
            <div>
              
            <div>
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" onClick={() => { this.setState({ toggle: false }) }}>IMDB</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                        <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/addmovie"}>Add Movie</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/actor"}>Add Actor</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/actress"}>Add Actress</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/director"}>Add Director</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/producer"}>Add Producer</Link>
                                    </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.props.setSuccess(false); this.setState({ toggle: false }) }} to={"/"} >Signout</Link>
                                        </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div >

                <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="auth-wrapper">
                            <div className="auth-inner">
                                <Switch>
                            <Route path="/addmovie" component={Addmovie} />
                                    <Route path="/actor"  component={AddActors} />
                                    <Route path="/actress"  component={AddActress} />
                                    <Route path="/director" component={AddDirector} />
                                    <Route path="/producer"  component={AddProducer} />
                                    </Switch>
                            </div>
                        </div>
                    </div>
                

                </div>
         
            </div>
           
        )
    }
}

export default AdminDashboard;
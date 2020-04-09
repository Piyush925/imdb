import React from 'react';
import { connect } from 'react-redux'
import { SHOW_MOVIES } from '../actions/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../popup.css"
import SignUp from '../containers/Signup'
import AddActors from '../containers/AddActors';
import AddActress from '../containers/AddActress'
import AddDirector from '../containers/AddDirector';
import AddProducer from '../containers/AddProducer';
import Addmovie from '../containers/Addmovie'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import Signin from '../containers/Signin'
import AdminDashboard from '../containers/AdminDashboard'

import Pagination from 'react-bootstrap/Pagination'

import "../App.css"
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';



class Showmovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            limit: 5,
            activec: 1,
            toggle: false

        }
    }
    render() {
        console.log( this.props)
        let movies=[];
        this.props.items.movies.filter(name=>name.toUpperCase().includes(this.props.search.toUpperCase())).map((item)=>{
            return( //this.props.search.length>0?
               // this.props.search.toUpperCase()===item.toUpperCase()?
                movies.push(item)//:null
              //  :movies=this.props.items.movies

            )
        })
        if (this.props.success) { ToastsStore.success("Login Successfull") }
      //  let len = this.props.items.movies.length;
      let len = movies.length;
        let page = len / 5;
        console.log(page)
        if(page<1){page=1}
        let item = [];
        for (let i = 1; i <= page; i++) {
            item.push(i)
        }
        return (
            <Router>

                <div>

                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <Link className="navbar-brand" onClick={() => { this.setState({ toggle: false }) }}>IMDB</Link>

                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <p className="collapse navbar-collapse"><input className="pagination" onChange={this.props.onSearchChange} placeholder="Search a movie"></input>

                                    </p>

                                    {!this.props.success ? <div className="navbar-nav ml-auto" > <li className="nav-item">
                                        <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/signin"}>Login</Link>
                                    </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/signup"}>Signup</Link>
                                        </li>
                                    </div> : null}

                                    {this.props.success && this.props.isAdmin === false ? <div className="navbar-nav ml-auto">
                                        <li className="nav-link">Watchlist</li>
                                        <li className="nav-link">Favlist</li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.props.setSuccess(false); this.setState({ toggle: false }) }} to={"/"} >Signout</Link>
                                        </li></div> : null}

                                    {this.props.success && this.props.isAdmin ? <div className="navbar-nav ml-auto">
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
                                            <Link className="nav-link" onClick={() => { this.props.setSuccess(false); this.props.setAdmin(false); this.setState({ toggle: false }) }} to={"/"} >Signout</Link>
                                        </li>
                                    </div> : null}

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div >

                    {this.state.toggle === false || (this.props.success === true && this.props.isAdmin === false) ?

                        <div>
                            <div>
                                <br />
                                <br />
                                <br />
                                <h1 >Movies</h1>
                                <div className="pagination">
                                    {movies.map((item, key) => {
                                        return (
                                            key > this.state.limit - 6 && key < this.state.limit ?
                                            <div >
                                                <Card style={{ width: 220, height: 200 }} >
                                                    <CardHeader>
                                                        <label>{item}</label></CardHeader>
                                                    <CardBody> </CardBody>
                                                    <CardFooter><button >Add Task
                                                    </button>
                                                    </CardFooter>
                                                </Card>
                                            </div> : null 
                                        )
                                    })}

                                </div>
                            </div>
                            <br />
                            <div className='pagination' >
                                <Pagination >

                                    <Pagination.First onClick={() => { this.setState({ activec: 1, limit: 5 }) }} />
                                    <Pagination.Prev onClick={() => { this.state.limit - 5 >= 5 ? this.setState({ activec: this.state.activec - 1, limit: this.state.limit - 5 }) : ToastsStore.warning("First Page") }} />
                                    {
                                        item.map((it, key) => {
                                            return it >= this.state.activec && it < this.state.activec + 5 ?
                                                <Pagination.Item onClick={() => { this.setState({ activec: it, limit: 5 * it }) }} active={this.state.activec === key + 1 ? true : false}>{it}</Pagination.Item> : null
                                        })
                                    }

                                    <Pagination.Next onClick={() => { this.state.limit + 5 <= page * 5 ? this.setState({ activec: this.state.activec + 1, limit: this.state.limit + 5 }) : ToastsStore.warning("Last Page") }} />
                                    <Pagination.Last onClick={() => { this.setState({ activec: page, limit: this.props.items.movies.length }) }} />
                                </Pagination>

                            </div>
                        </div> : <div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="auth-wrapper">
                                <div className="auth-inner">

                                    <Switch>
                                        <Route path="/signin" component={Signin} />
                                        <Route path="/signup" component={SignUp} />
                                        <Route path="/Admin" component={AdminDashboard} />
                                        <Route path="/addmovie" component={Addmovie} />
                                        <Route path="/actor" component={AddActors} />
                                        <Route path="/actress" component={AddActress} />
                                        <Route path="/director" component={AddDirector} />
                                        <Route path="/producer" component={AddProducer} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </Router>
        )
    }
}

export default Showmovies;
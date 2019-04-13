import React from 'react';

export default class Header extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30"
                         className="d-inline-block align-top" alt=""/>
                        Project Name
                </a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}
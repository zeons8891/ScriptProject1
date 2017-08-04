import React from 'react';
import {Link} from 'react-router';
import {Footer} from './Footer';


import 'bootstrap-sass';
import 'bootstrap-loader';



export const Header = (props) => {



    return (
        <div>
        <nav className="navbar navbar-default navbar-fixed-top ">
            <div className="container-fluid ">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"} activeStyle={{color:"red"}} style={{color:'white'}}>Home</Link></li>
                        <li><Link to={"/resume" } activeClassName={"active"} /*style={{color:'white'}} */ >Resume</Link></li>

                    </ul>

                </div>


            </div>


        </nav>

          <Footer/>


        </div>

    );

};


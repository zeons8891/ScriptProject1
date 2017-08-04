import React from 'react';
import {browserHistory} from 'react-router';
import {CV} from './CV';


export class  Mycomponent extends React.Component {
    onNavigateHome () {
       browserHistory.push("/home");
    }
    render () {
        return (
          <div>


                <CV/>
              <button  onClick={this.onNavigateHome} className="btn btn-primary">Go Home</button>


          </div>
        );


    }



}
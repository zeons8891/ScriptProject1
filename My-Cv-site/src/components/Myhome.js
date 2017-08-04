import React from 'react';
import {browserHistory} from 'react-router';
import './Myhome.scss'

export class Myhome extends  React.Component {
    onNavigateComponent () {
        browserHistory.push("/resume");
    }

    render() {
        return (
            <div className=" container col-lg-4 col-lg-offset-4 box">
                <img src={require('../images/cv.png')} className="pic" />





                <div >
                    <h1> Željko Spasojević</h1>
                    <h5>Front end developer | Java Script developer</h5>
                    <div className="break"></div>

                    <p>
                        My passion is creating web applications
                    </p>
                    <button className=" btn btn-success" onClick={this.onNavigateComponent}> Go to next page</button>

                </div>

            </div>
        )
    }

}

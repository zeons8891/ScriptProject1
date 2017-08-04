import React from 'react';
import {Myskills} from './Myskills';




export class CV extends React.Component {
    render ()  {
        return (
            <div>
                <div className="container-fluid ">
                    <div className="row">
                        <div className=" col-xs-12 ">
                            <div id="my-slider" className="carousel slide" data-ride="carousel">
                                {/*indicators dot nav */}

                                <ol className="carousel-indicators">
                                    <li target="#my-slider" slide="0" className="active">

                                    </li>
                                    <li target="#my-slider" slide="1">

                                    </li>
                                </ol>

                                {/*wraper for slides */}
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                        <img src={require('../images/picture1.png')} />

                                        <div className="carousel-caption">
                                            <h1> Željko Spasojević CV </h1>
                                        </div>

                                    </div>
                                    <div className="item ">
                                        <img src={require('../images/picture2.png')} />

                                        <div className="carousel-caption">
                                            <h1> Željko Spasojević CV </h1>
                                        </div>

                                    </div>

                                </div>

                                {/*controls next and prev buttons */}


                                <a  className="left carousel-control" href="#my-slider" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-menu-left icon-prev" aria-hidden="true">

                        </span>
                                </a>
                                <a  className="right carousel-control" href="#my-slider" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-menu-right icon-next" aria-hidden="true">

                        </span>
                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="row">
                        <aside className="col-md-8 ">

                            <h1>Work History	</h1>

                                <h2>NCR  Corporation    08.2014 - Present:Belgrade,Serbia:</h2>
                            <p className="text"> FirstLevel Support for IBM POS systems (Registers and peripheral equipment, SelfCheckouts and ATM machines); Supporting NCR’s Clients, Customer Engineers and partners;
                                Support includes: problem identification, analysis, diagnosis and resolution; Presenting agreement for problem isolation, solution creation and implementation planning;Answering incoming phone calls and escalations, emails or tickets from clients and field engineers; Monitoring the notification and phone queue screens; Resolving tickets with a remote resolution opportunity; Preparing standard reports; Administration work on databases, updating clients information; Managing Workload from onsite resources to assure efficient call management within agreed Service Levels; 24/7operations that include weekend support;Monitoring and reacting to events for all customer
                            </p>

                        </aside>

                        <aside className="col-md-4 " >
                            <div className="panel panel-default Panel Content  panel-primary  ">
                                <div className="panel-heading "> <h1 style={{color:'black'}}>My Skills</h1> </div>
                                <div className="panel-body">
                                    <div>
                                        <Myskills/>
                                    </div>

                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

        );

    }

}
import React from 'react';
import './skills.scss';



export class Myskills extends React.Component {
    render ()  {
        return (
            <div >


                <p className="Para">HTML</p>
                <div className="comp">
                    <div className="skills html">80%</div>
                </div>

                <p className="Para">CSS</p>
                <div className="comp">
                    <div className="skills css">75%</div>
                </div>

                <p className="Para">JavaScript</p>
                <div className="comp">
                    <div className="skills js">70%</div>
                </div>

                <p className="Para">React JS</p>
                <div className="comp">
                    <div className="skills php">60%</div>
                </div>
            </div>
        );

    }

}
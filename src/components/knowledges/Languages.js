import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id:1, value:"Javascript", xp:4},
            {id:2, value:"Css", xp:4},
            {id:3, value:"Java", xp:5},
            {id:4, value:"Jquery", xp:3}
        ],
        frameworks :[
            {id:1, value:"React", xp:3},
            {id:2, value:"Angular", xp:3},
            {id:3, value:"Bootstrap", xp:4},
            {id:4, value:"NodeJs", xp:1}
        ]
    }
    render() {

        let {languages,frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                languages={languages}
                className="languagesDisplay"
                title="langages"
                />
                <ProgressBar
                languages={frameworks}
                title="frameworks & bibliothêques"
                className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;
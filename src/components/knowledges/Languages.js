import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id:1, value:"Javascript", xp:2},
            {id:2, value:"Css", xp:2},
            {id:3, value:"Java", xp:2},
            {id:4, value:"Jquery", xp:2}
        ],
        frameworks :[
            {id:1, value:"React", xp:2},
            {id:2, value:"Agnular", xp:2},
            {id:3, value:"Bootstrap", xp:2},
            {id:4, value:"NodeJs", xp:2}
        ]
    }
    render() {

        let {languages,frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                languages={languages}
                className="languagesDisplay"
                title="languages"
                />
                <ProgressBar
                languages={frameworks}
                title="frameworks & bibliothéques"
                className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;
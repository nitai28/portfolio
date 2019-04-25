import React from 'react';
import Projects from'../Projects/Projects'
import './Main.scss';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {}
    }


    render() {

        return (
            <div className="Main">
                <div className="top-main">

                    <ul className="skill-list">
                        <li className="logo-box">
                            <div className="html"/>
                        </li>
                        <li className="logo-box">
                            <div className="css"/>
                        </li>
                        <li className=" logo-box">
                            <div className="js"/>
                        </li>
                        <li className=" logo-box">
                            <div className="node"/>
                        </li>
                        <li className=" logo-box">
                            <div className="vue"/>
                        </li>
                        <li className=" logo-box">
                            <div className="react"/>
                        </li>
                    </ul>
                    <div className="skills-info">
                        <span className="skills-headline">SKILLS</span>
                        <p className="skills-description"><span className="green-txt">I</span> code sites with the last web technology's included
                            responsive design, using <span className="green-txt">Html5 ,CSS3, JS,SCSS,Node.JS VUE React,React-redux</span>  and also have
                            knowledge with <span className="green-txt">MongoDB</span> and <span className="green-txt">SQL</span>. </p>
                    </div>
                </div>
                <div className="projects">

                </div>
                <Projects/>
            </div>
        )


    }
}

export default Main;
import React, {Component} from 'react';
import Footer from './Footer';

class Projects extends Component {
    render() {


        return (
            <section className="projects-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                                <div className="about-title display-1"> MY PROJECTS </div>
                            <br/>
                                <p className="about-description display-7 ">
                                   I have worked on projects in DBMS and Front End Design. Also I am currently doing a MERN STACk DEVELOPMENT course. 
                                   Here are few projects I have done during this MERN Stack course.

                                </p>
                            </div>
                            <div className="skills-list col-md-6">
                            <b> Click on the following to view my projects! </b>
                                <ul className="skills-list display-6">
                                    
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={""}> WORD COUNTER </a> </li>
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={""}> CALCULATOR </a> </li>
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={""}> COLOR PICKER </a> </li>
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={""}> FETCH RECORDS </a> </li>
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={""}> AGE CALCULATOR </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                    <Footer/>
            </section>

        );
    }
}

export default Projects;
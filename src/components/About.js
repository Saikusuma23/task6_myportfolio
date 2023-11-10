import React, {Component} from 'react';
import Footer from './Footer'
class About extends Component {
    render() {

        return (
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-title display-1"> ABOUT ME </div>
                            <p className="about-description display-7 ">
                                I am SAI KUSUMA C, a developer and CSE student. I am a MTech Integrated Software engineering student in VIT, Vellore.
                                I have programmingg skills in Python, Java, and I also do programming languages like HTML, CSS, JavaScript, Express JS, React JS, and Node JS. I have worked on Database Management System and Front End projects.
                                I have set a path to improve my coding skills. I also like to design user friendly webpages.
                                My portfolio displays my interests in skills, projects.
                                Thank you for visiting my portfolio. Feel free to contact me at any time!

                            </p>
                        </div>
                        
                        

                            <ul> Known Languages
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Java</li>
                                <li>React JS</li>
                                <li>Bootstrap</li>
                                <li>Express JS</li>
                                <li>Node JS</li>
                                <li>Python</li>
                                <li>Java</li>
                            </ul>
                    </div>
                </div>

                <Footer/>
            </section>

        );
    }

}

export default About;
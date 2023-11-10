import React, {Component} from 'react';
import Project from './Project'
import Footer from './Footer';


class Home extends Component {
    render() {

        return (
            <section className="home-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <p className="section-title display-1"> WELCOME </p>
                            <p className="section-title display-1"> TO MY PORTFOLIO PAGE </p>
                            <h1 className={'name'}> I am SAI KUSUMA C</h1>
                        </div>
                    </div>
                </div>

                <Footer/>
            </section>

        );
    }
}

export default Home;
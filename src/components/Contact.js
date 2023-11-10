import React, {Component} from 'react';
import Footer from './Footer';
class Contact extends Component {

    render() {
        return (
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="contact-content">
                                <h2> Contact Me </h2>
                                <p className="contact-description">
                                    Feel free to contact me at any time!
                                </p>
                                <div className="contact-item">
                                    <span> Name: SAI KUSUMA C </span>
                                    
                                </div>
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <span> Email Address: sai228@gmail.com </span>
                                        
                                    </div>
                                    <div className="contact-item">
                                        <span> Phone Number: 8757654589 </span>
                                        
                                    </div>
                                    <div className="contact-item">
                                        <span> Location: Malleshwaram coconut avenue road </span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>





        );
    }
}

export default Contact;
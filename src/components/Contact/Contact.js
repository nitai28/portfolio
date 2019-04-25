import React from "react";
import Image from 'react-bootstrap/Image'


import './Contact.scss'


class Contact extends React.Component {
    render() {
        return (
            <div className="Contact">
                <div className="contact-info">
                    <Image className="profile-img" src="/img/0.jpg" roundedCircle/>
                    <ul>
                        <li className="git icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/nitai28">
                                <img src="/icons/git.svg" alt=""/>
                            </a>
                        </li>
                        <li className="mail icon">
                            <a target="_blank" rel="noopener noreferrer" href="mailto:nitai230@gmail.com">
                                <img src="/icons/gmail.svg" alt=""/>
                            </a>
                        </li>
                        <li className="linkedin icon">
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.linkedin.com/in/nitai-shavit/">
                                <img src="/icons/linkedin1.svg" alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="contact-desc">
                    <p>I'm 32 years old from Ness Ziona , i
                        very loving the development world and want to establish my self in it.
                        I very love to coding, learn new things, watch football, hang out with my family and friends.
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact;
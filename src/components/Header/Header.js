import React from 'react';
import './Header.scss';

class Header extends React.Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            navClass: null
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll(event) {
        if (window.scrollY > 0)
            this.setState({navClass: 'nav-scroll'});
        else this.setState({navClass: null});
    };

    render() {

        return (
            <div id="home" className="header">
                <div className="bg"/>
                <nav className={this.state.navClass}>
                    <ul className="nav-list">
                        <li>
                            <img src="/img/logo.png " alt=""/>
                        </li>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="profile-info">
                    <div className="profile-im"/>
                    {/*<div className="profile-name"><mark>Nitai Shavit</mark></div>*/}
                    <div className="profile-name">Nitai Shavit</div>
                    <div className="profile-des">Full Stack Web Developer</div>
                    {/*<ul className="contacts-list">*/}
                    {/*<li></li>*/}
                    {/*<li></li>*/}
                    {/*<li></li>*/}
                    {/*</ul>*/}
                </div>

            </div>
        )


    }
}

export default Header;
import React from 'react';
import {Card, Button} from 'react-bootstrap'

import './Projects.scss'

class Projects extends React.Component {
    render() {
        return (
            <div className="project">
                <h1>Projects</h1>
                <div className="project-container">
                    <Card
                        style={{width: '18rem', background: 'linear-gradient(20deg, #1a3938,#000000)', color: 'white'}}>
                        <Card.Img variant="top" src="/img/gofer.png"/>
                        <Card.Body>
                            <Card.Title>Contact Manger</Card.Title>
                            <Card.Text>
                                PSD to html project with VUE and Fire Base
                            </Card.Text>
                            <Button href="https://vigorous-tesla-bdb707.netlify.com/#/" target="_blank"
                                    rel="noopener noreferrer" variant="primary">Visit project</Button>
                        </Card.Body>
                    </Card>
                    <Card
                        style={{width: '18rem', background: 'linear-gradient(20deg, #1a3938,#000000)', color: 'white'}}>
                        <Card.Img variant="top" src="/img/orangize.png"/>
                        <Card.Body>
                            <Card.Title>ORANGIZE</Card.Title>
                            <Card.Text>
                                Its app based on 'Trello' idea, write with VUE,NODE.JS and MongoDB
                            </Card.Text>
                            <Button href="https://arcane-castle-40697.herokuapp.com/#/" target="_blank"
                                    rel="noopener noreferrer" variant="primary">Visit project</Button>
                        </Card.Body>
                    </Card>
                    <Card
                        style={{width: '18rem', background: 'linear-gradient(20deg, #1a3938,#000000)', color: 'white'}}>
                        <Card.Img variant="top" src="/img/herolo-cinema.png"/>
                        <Card.Body>
                            <Card.Title>Herolo-Cinema</Card.Title>
                            <Card.Text>
                                Its a movie app ,write with React and Redux
                            </Card.Text>
                            <Button href="https://flamboyant-sammet-7b5748.netlify.com/" target="_blank"
                                    rel="noopener noreferrer" variant="primary">Visit project</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Projects
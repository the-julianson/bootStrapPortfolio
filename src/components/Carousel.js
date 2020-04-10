import React, { Component } from 'react';

import Card from '../components/Card';

import flask from '../assets/images/flask.png';
import django from '../assets/images/django.png';
import react from '../assets/images/react.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            items : [
                {
                    id: 0,
                    title: 'A Flask HTML web',
                    subTitle: 'Just a simple tribute page',
                    imgSrc: flask,
                    link: 'https://blog.hubspot.com/hs-fs/hubfs/tinsanity-404-page.gif?width=495&name=tinsanity-404-page.gif',
                    selected: false
                },
                {
                    id: 1,
                    title: 'CRM with Django',
                    subTitle: 'A full stack web with PostgreSQL',
                    imgSrc: django,
                    link: 'https://youtu.be/EGp0PRFDoAA ',
                    selected: false
                },
                {
                    id: 2,
                    title: 'React web single page App',
                    subTitle: 'Fictitious Real State Company',
                    imgSrc: react,
                    link: 'https://youtu.be/Ayo3q7xDhhg',
                    selected: false
                }            
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState ({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    
    }

    render() { 
        return ( 
            <Container fluid={true}>
                <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
                </Row>

            </Container>
            
         )
    }
}
 
export default Carousel;
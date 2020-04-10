import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';

function Content(props){

    return(
        <Container fluid={true}>
            <Row>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default Content;
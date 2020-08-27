import React from 'react';
import {Button, Container} from 'react-bootstrap';

import './Course.css';
const Course = (props) => {
    const handleEnroll = props.handleEnroll;
    const {title, author, price, rating, originalPrice} = props.course;
    
    return(

        <div className="course-card " >
            <Container >
                <div className="card-body">
                    <h3>{title}</h3>
                    <h6>Author: {author}</h6>
                    <p>Rating: {rating}</p>
                    <p className="mt-auto">Price: ${price}</p>
                    <Button variant="warning" className="align-self-end" onClick={() => {handleEnroll(props.course)}}>Enroll Today!</Button>{' '}
                </div>
            </Container>
        </div>
    );
}

export default Course;

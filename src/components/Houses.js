import React from 'react'
import data from './data/properties.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Houses.css'

const Houses = () => {
    const newdata = data.map((data)=>{
        return(

    <Card className='card'  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={(data.image_url)} />
      <Card.Body>
        <Card.Title>{data.address}</Card.Title>
        <Card.Text>
        {data.description}
        </Card.Text>
        <Button variant="primary">View this property</Button>
      </Card.Body>
    </Card>          
          
        );
      });

      return newdata
}

export default Houses
import React from 'react'
import data from './data/neighborhoods.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Neighborhoods = () => {
    const newdata = data.map((data)=>{
        return(

    <Card  border="primary" className='card-neighborhood'  style={{ width: '18rem' }}>
        <Card.Header>{data.neighborhood_name}</Card.Header>   
      <Card.Body>
        <Card.Title>{data.neighborhood_name} - {data.zip_code}</Card.Title>
        <span>Population: {data.population}</span><br/>
        <span>Available properties: {data.num_residences}</span>
  
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        
        </Card.Text>
        <Button variant="info">View properties</Button>
      </Card.Body>
    </Card>          
          
        );
      });

      return newdata
}

export default Neighborhoods
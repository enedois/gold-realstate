import React from 'react'
import data from './data/agents.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

const Agents = () => {
    const newdata = data.map((data)=>{
        return(

    <Card bg="light"  border="primary" className='card-neighborhood'  style={{ width: '18rem' }}>
        <Card.Header>{data.full_name} <br/><Badge bg="secondary">{data.years_of_experience} years of Experience</Badge></Card.Header>   
      <Card.Body>
        <Card.Title></Card.Title>        
  
        <Card.Subtitle className="mb-2 text-muted">{data.intro}</Card.Subtitle>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary">Contact</Button>
      </Card.Body>
    </Card>          
          
        );
      });

      return newdata
}

export default Agents
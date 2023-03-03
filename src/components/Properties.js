import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Properties.css"
import data from './data/properties.json'

const Properties = () => {
  const newdata = data.map((data)=>{
    return(
      <div className="spellStyle">
        <h3>{data.address}</h3>
          <table>
            <tr>
              <td>Class: {data.neighborhood}</td>
              <td>Level: {data.description}</td>
              <td>School: {data.image_url}</td>
                        </tr>
           
          </table> 
          <p className="description">{data.description}</p>      
      </div>
      
    );
  });
    
}

export default Properties
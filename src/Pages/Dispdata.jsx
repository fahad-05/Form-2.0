
import React from "react";
import { useLocation } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Dispdata.css';

const DispData = () => {
  const location = useLocation();
  const { fname, lname, state, city, address, zip, username, gender, selectedOption, dob, hobbies, imageUrl } = location.state;
  return (
    <div className="display-data-container">
      <div id="videobackground">
        <div className="detail-box">
        <h5><strong>Welcome {username}</strong></h5>
        <img src={imageUrl} alt={`Profile of ${username}`} width="250" height="200" />



        <ListGroup>
          <ListGroup.Item>Name  :  {fname} {lname}</ListGroup.Item>
          <ListGroup.Item>Gender  :  {gender}</ListGroup.Item>
          <ListGroup.Item>Date of Birth : {dob}</ListGroup.Item>
          <ListGroup.Item>Qualification  :  {selectedOption}</ListGroup.Item>

          <ListGroup.Item>Address: {address}</ListGroup.Item>
          <ListGroup.Item>State  :  {state}</ListGroup.Item>
          <ListGroup.Item>City   :  {city}</ListGroup.Item>
          <ListGroup.Item>Zip    :  {zip}</ListGroup.Item>
          <ListGroup.Item>
              Hobbies: {hobbies.reading ? 'Reading, ' : ''}
                       {hobbies.cooking ? 'Cooking, ' : ''}
                       {hobbies.sports ? 'Sports, ' : ''}
                       {hobbies.music ? 'Music, ' : ''}
            </ListGroup.Item>
          
          {/* <ListGroup.Item>Hobbies  :  {hobbies}</ListGroup.Item> */}

        </ListGroup>
      </div>
      </div>
    </div>
  );
};

export default DispData;

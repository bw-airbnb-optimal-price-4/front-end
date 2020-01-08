import React from "react";
import styled from "styled-components";
import Header from "../Header";

const DivStyling = styled.div`
  margin: 5% 0% 3%;
  text-align: center;
`;

const DescriptionStyling = styled.div`
  display: block;
  line-height: 4;
  margin: 3% 35% 0%;
  justify-content: center;
`;

const PicUploadStyling = styled.div`
  display: block;
  line-height: 4;
  margin: 0% 40% 3%;
  justify-content: center;
`;

const AmenitiesStyling = styled.div`
  margin-top: 2%;
`;

const ButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 16%;
  height: 30px;
  margin: 5% 42% 0% 42%;
  color: white;
  background-color: #19bd60;
`;

export default function OnboardingFour() {
  return (
    <div>
      <Header />
      <DivStyling>
        <h2>Please provide additional property information</h2>
        <h3>Step 3 of 3</h3>      
        <form>
          <DescriptionStyling>  
            <label>Provide a short description of your property:
            <textarea rows="3" cols="50" name="description" placeholder="Enter property description here..."></textarea>
            </label>
          </DescriptionStyling>
          <PicUploadStyling>
            <label>Upload a picture to show off your property:
            <input type="file"
            id="avatar" name="avatar"
            accept="image/png, image/jpeg"/>
            </label>
          </PicUploadStyling>  
          <p>Please check all of the following amenities your property offers:</p>
          <AmenitiesStyling>
            <label>TV 
              <input type="checkbox" name="tv"/>
            </label>
            <label>Internet 
              <input type="checkbox" name="internet"/>
            </label>
            <label>WiFi 
              <input type="checkbox" name="wifi"/>
            </label>
            <label>Kitchen 
              <input type="checkbox" name="kitchen"/>
            </label>
            <label>Pet-Friendly 
              <input type="checkbox" name="pets"/>
            </label>
            <label>Breakfast 
              <input type="checkbox" name="breakfast"/>
            </label>
            <label>Free Parking 
              <input type="checkbox" name="free-parking"/>
            </label>
            <label>Hot Tub 
              <input type="checkbox" name="hot-tub"/>
            </label>
            <label>Air Condintioning 
              <input type="checkbox" name="air-conditioning"/>
            </label>
            <label>Private Entrance 
              <input type="checkbox" name="private-entrance"/>
            </label>
          </AmenitiesStyling>
        </form>
        <ButtonStyling>Get your quote</ButtonStyling>
      </DivStyling>
    </div>
  );
}

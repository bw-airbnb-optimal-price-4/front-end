import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header";

const DivStyling = styled.div`
  margin: 5% 0% 3%;
  text-align: center;
`;

const ButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 16%;
  height: 30px;
  margin: 3% 42% 5% 42%;
  color: white;
  background-color: #19bd60;
`;

const InputStyling = styled.input`
  margin: 2% 40%;
  width: 20%;
`;

const DOBStyling = styled.input`
  margin: 2% 40% 2% 40%;
  width: 20%;
`;
const LabelStyling = styled.div`
  line-height: 4;
  margin: 2% 40% 2% 40%;
  width: 20%;
`;

export class OnboardingSeven extends Component {
  render() {
    return (
      <div>
        <Header />
        <DivStyling>
          <h2>Tell us about yourself</h2>
        </DivStyling>
        <form>
          <InputStyling
            placeholder="First Name"
            id="first-name"
            type="text"
            name="first name"
          />
          <InputStyling
            placeholder="Last Name"
            id="last-name"
            type="text"
            name="last-name"
          />
          <DOBStyling type="date" name="dob"/>
          <LabelStyling>
              <label>Profile picture:
                  <input type="file"
                  id="profile" name="profile"
                  accept="image/png, image/jpeg"/>
              </label>
          </LabelStyling>
        </form>
        <ButtonStyling>Submit</ButtonStyling>
      </div>
    );
  }
}

export default OnboardingSeven;

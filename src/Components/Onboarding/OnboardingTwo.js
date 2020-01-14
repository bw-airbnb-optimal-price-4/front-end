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
  margin: 5% 42% 5% 42%;
  color: white;
  background-color: #19bd60;
  box-shadow: 5px 5px 5px rgba(204, 204, 204, 1);

  &:hover {
    background-color: #128745;
  }
`;

const FormStyling = styled.form`
  text-align: right;
  margin-right: 37%;
`;

const SelectStyling = styled.select`
  margin: 2% 3%;
`;

export class OnboardingTwo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  neighborhoods = {35: 'Allendale', 6: 'Anderson Mill', 12: 'Angus Valley',
    25: 'Balcones Civic Association', 17: 'Balcony Woods',
    54: 'Barton Creek', 73: 'Barton Hills', 67: 'Bouldin Creek',
    24: 'Brentwood', 69: 'Bryker Woods', 28: 'Bull Creek',
    74: 'Canyon Mesa', 27: 'Cat Mountian', 18: 'Cherry Creek',
    31: 'Circle C', 53: 'Clarksville', 7: 'Copperfield',
    56: 'Crestview', 52: 'Dawson', 75: 'Downtown',
    39: 'East Congress', 57: 'East Downtown',
    44: 'East Riverside', 58: 'Galindo', 66: 'Gateway',
    0:  'Georgian Acres', 47: 'Govalle', 15: 'Gracywoods',
    41: 'Hancock', 32: 'Highland', 59: 'Holly', 36: 'Hyde Park',
    3:  'Lamplight Village', 42: 'Long Canyon', 21: 'MLK & 183',
    10: 'McKinney', 8: 'Mesa Park', 9: 'Milwood',
    19: 'Montopolis', 45: 'Mueller', 13: 'North Loop',
    14: 'North Shoal Creek', 22: 'Northwest Hills',
    23: 'Oak Hill', 68: 'Old Enfield', 65: 'Old West Austin',
    26: 'Parker Lane', 16: 'Pecan Spings', 20: 'Pleasant Valley',
    77: 'Rainey Street', 63: 'Rollingwood', 60: 'Rosedale',
    49: 'Rosewood', 5: 'SW Williamson Co.', 4: 'Scofield Ridge',
    62: 'South Congress', 64: 'South First', 55: 'South Lamar',
    46: 'South Manchaca', 48: 'St. Edwards', 1: 'St. Johns',
    40: 'Steiner Ranch', 51: 'Sunset Valley', 71: 'Tarrytown',
    61: 'Travis Heights', 37: 'University Hills',
    38: 'University of Texas', 50: 'Upper Boggy Creek',
    33: 'Walnut Creek', 76: 'West Austin', 29: 'West Campus',
    34: 'West Congress', 43: 'Westgate', 72: 'Westlake Hills',
    2:  'Windsor Hills', 30: 'Windsor Park', 11: 'Wooten',
    70: 'Zilker'}

    propertyTypes = {34: 'Aparthotel', 17: 'Apartment', 5: 'Barn',
                  16: 'Bed and breakfast', 2: 'Boat', 31: 'Boutique hotel',
                  23: 'Bungalow', 1: 'Bus', 15: 'Cabin', 7: 'Camper/RV',
                  0:  'Campsite', 29: 'Casa particular (Cuba)', 30: 'Chalet',
                  19: 'Condominium', 22: 'Cottage', 25: 'Dome house',
                  10: 'Farm stay', 9: 'Guest suite', 12: 'Guesthouse',
                  3:  'Hostel', 28: 'Hotel', 18: 'House', 13: 'Hut',
                  27: 'Loft', 26: 'Nature lodge', 14: 'Other', 33: 'Resort',
                  24: 'Serviced apartment', 4: 'Tent', 8: 'Tiny house',
                  20: 'Tipi', 21: 'Townhouse', 11: 'Treehouse', 32: 'Villa',
                  6:  'Yurt'}

  onNeighborhoodChange = e => {
    this.props.addValues('neighborhood', e.target.value)
    this.props.addValues('neighborhoodName', this.neighborhoods[Number(e.target.value) - 1])
  }
  onPropertyTypeChange = e => {
    this.props.addValues('propertyType', e.target.value)
    this.props.addValues('propertyTypeName', this.propertyTypes[Number(e.target.value) - 1])
  }

  render() {
    const { values, handleChange } = this.props;


    const neighborhoodsOptions = Object.keys(this.neighborhoods).map(key =>
          <option key={Number(key) + 1} value={Number(key) + 1}>{this.neighborhoods[key]}</option>
      )
    const propertyTypesOptions = Object.keys(this.propertyTypes).map(key =>
          <option key={Number(key) + 1} value={Number(key) + 1}>{this.propertyTypes[key]}</option>
      )
    return (
      <div>
        <Header />
        <DivStyling>
          <h2>Obtain your optimal price!</h2>
          <h3>Step 1 of 2</h3>
        </DivStyling>
        <FormStyling>
          <div>
        <label>Choose Property Type:</label>
          <SelectStyling name="room-type"
            onChange={handleChange('roomType')}
            defaultValue={values.roomType || ""}
          >
            <option value="" disabled hidden>
              Choose Room Type
            </option>
            <option value="Entire Home/Apt">Entire Home/Apt</option>
            <option value="Private Room">Private Room</option>
            <option value="Shared Room">Shared Room</option>
            <option value="Hotel Room">Hotel Room</option>
          </SelectStyling>
          </div>
          <div>
          <label>Choose Neighborhood:</label>
          <SelectStyling name="neighborhood"
            onChange={this.onNeighborhoodChange}
            defaultValue={values.neighborhood || ""}
          >
            <option value="" disabled hidden>
              Choose Neighborhood
            </option>
            {neighborhoodsOptions}
          </SelectStyling>
          </div>
          <div>
          <label>Choose Property Type:</label>
          <SelectStyling name="propertyType"
            onChange={this.onPropertyTypeChange}
            defaultValue={values.propertyType || ""}
          >
            <option value="" disabled hidden>
              Choose Property Type
            </option>
            {propertyTypesOptions}
          </SelectStyling>
          </div>
        </FormStyling>
        <ButtonStyling onClick={this.continue}>Step 2</ButtonStyling>
      </div>
    );
  }
}

export default OnboardingTwo;

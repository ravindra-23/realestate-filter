import React, { useContext } from 'react'
import { Dropdown } from 'react-bootstrap';
import { RiMapPinLine } from 'react-icons/ri';
import { HouseContext } from '../../ContextApi/houseContext';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown-section'>
        <RiMapPinLine className='dropdown-icon-primary' />
        <div className='dropdown-info'>
            <div>Location</div>
            <div>{country}</div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {countries.map((country, index) => {
          return (
            <Dropdown.Item
              onClick={() => setCountry(country)}
              key={index}
            >
              {country}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default CountryDropdown
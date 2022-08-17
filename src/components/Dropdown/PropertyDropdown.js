import React, { useContext } from 'react'
import { RiHome5Line } from 'react-icons/ri';
import { Dropdown } from 'react-bootstrap';
import { HouseContext } from '../../ContextApi/houseContext';

const PropertyDropdown = () => {
    const { property, setProperty, properties } = useContext(HouseContext);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown-section'>
        <RiHome5Line className='dropdown-icon-primary' />
        <div className='dropdown-info'>
            <div>Property Type</div>
            <div>{property}</div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {properties.map((property, index) => {
          return (
            <Dropdown.Item
              onClick={() => setProperty(property)}
              key={index}
            >
              {property}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default PropertyDropdown
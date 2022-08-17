import React, { useContext } from 'react'
import { Dropdown } from 'react-bootstrap';
import { HouseContext } from '../../ContextApi/houseContext';
import { RiWallet3Line } from 'react-icons/ri';


const PriceDropdown = () => {
    const { price, setPrice } = useContext(HouseContext);
const prices = [
    {
        value: 'Price range (any)',
    },
    {
        value: '500 - 1000',
    },
    {
        value: '1001 - 2000',
    },
    {
        value: '2001 - 3000',
    },
    {
        value: '3001 - 4000',
    },
    {
        value: '4001 - 6000',
    },
    {
        value: '6001 - 8000',
    },
    ];
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown-section'>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div className='dropdown-info'>
            <div>Price Range</div>
            <div>{price}</div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {prices.map((price, index) => {
          return (
            <Dropdown.Item
              onClick={() => setPrice(price.value)}
              key={index}
            >
              {price.value}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default PriceDropdown
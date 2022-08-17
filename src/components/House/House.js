import React from 'react'
import { Card } from 'react-bootstrap'
import { BiBed, BiBath, BiArea } from 'react-icons/bi'

const House = ({ house }) => {
  return (
    <>
        <Card className='house-card'>
            <Card.Img variant="top" src={house.image} className='house-image' />
            <Card.Body>
                <div className='house-type-country'>
                    <p className='house-type'>{house.type}</p>
                    <p className='house-country'>{house.country}</p>
                </div>
                <div className='house-address'>
                    <p className='house-address'>{house.address}</p>
                </div>
                <div className='house-details'>
                    <div className='house-detail d-flex'>
                        <BiBed />
                        <p>{house.bedrooms}</p>
                    </div>
                    <div className='house-detail d-flex'>
                        <BiBath />
                        <p>{house.bathrooms}</p>
                    </div>
                    <div className='house-detail d-flex'>
                        <BiArea />
                        <p>{house.surface}</p>
                    </div>
                </div>
                <div className='house-price'>
                    <p className='house-price'>$ {house.price}</p>
                </div>
            </Card.Body>
        </Card>
    </>
  )
}

export default House
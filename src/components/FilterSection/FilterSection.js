import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountryDropdown from '../Dropdown/CountryDropdown'
import PriceDropdown from '../Dropdown/PriceDropdown'
import PropertyDropdown from '../Dropdown/PropertyDropdown'
import { RiSearch2Line } from 'react-icons/ri';
import { HouseContext } from '../../ContextApi/houseContext'


const FilterSection = () => {
    const { handleClick } = useContext(HouseContext);
  return (
    <>
        <Container className='filter-container'>
            <Row>
                <Col lg={3} className='mb-2'>
                    <CountryDropdown />
                </Col>
                <Col lg={3} className='mb-2'>
                    <PriceDropdown />
                </Col>
                <Col lg={3} className='mb-2'>
                    <PropertyDropdown />
                </Col>
                <Col lg={3}>
                    <button className='search-btn' onClick={() => { handleClick()}}>
                        <RiSearch2Line />
                    </button>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default FilterSection
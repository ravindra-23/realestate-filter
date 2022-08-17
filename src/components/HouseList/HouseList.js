import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import House from '../House/House'
import { HouseContext } from '../../ContextApi/houseContext'

const HouseList = () => {
    const { houses } = useContext(HouseContext);
  return (
    <>
        <Container className="houses-container">
            <Row>
                {houses.map((house) => {
                    return (
                        <Col lg={4} key={house.id}>
                            <House house={house} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </>
  )
}

export default HouseList
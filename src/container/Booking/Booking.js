import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Modal, Divider } from 'antd';
import BookingForm from './BookingForm';
import BookingInfo from './BookingInfo';
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from './Booking.style';
import axios from 'axios'

const Booking = ( { match } ) => {
  
  const [ bookingDetail, setBookingDetail ] = useState([])

  const URL = `http://localhost:8080/exhbns/find/` 

  useEffect(() => {
    axios.get(URL+match.params.exhbnNum)
    .then(reps => {
      setBookingDetail(reps.data)
    })
    .catch(err => {
      alert(`실패`)
      throw err;
    })
  }, [])


  return (
    <Wrapper>
      <Divider />
        <Row gutter={100}>
          <Col xl={14}>
            <BookingInfo exhbnNum = {match.params.exhbnNum}/>
          </Col>
          <Col xl={10}>
            <BookingForm/>
          </Col>
        </Row>
        <Divider> C:ART  |  Seoul Museum of Art </Divider>
    </Wrapper>
  );
};

export default Booking;

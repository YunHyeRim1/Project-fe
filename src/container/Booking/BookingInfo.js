import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Input, Switch, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { AuthContext } from 'context/AuthProvider';
import { FieldWrapper, SwitchWrapper, Label, Title } from './Booking.style';
import Information from '../Information/Information';
import { TextField } from '@material-ui/core';
import useDataApi from 'library/hooks/useDataApi';
import isEmpty from 'lodash/isEmpty';
import Loader from 'components/Loader/Loader';
import axios from 'axios';

const BookingInfo = ( props ) => {

  const [ exhbnDetail, setexhbnDetail ] = useState([])
  const [ props2 ] = useState([])

  const URL = `http://localhost:8080/exhbns/find/` 

  useEffect(() => {
    axios.get(URL+props.exhbnNum)
    .then(reps => {
      setexhbnDetail(reps.data)
    })
    .catch(err => {
      alert(`실패`)
      throw err;
    })
  }, [])

  // const { data, loading } = useDataApi(`http://localhost:8080/exhbns/all`);

  if (isEmpty(exhbnDetail)) return <Loader />;
  
  const { rating, ratingCount, amenities, author} = props2;

  return (
    <form> 
      <div>
        <Title>예매 정보</Title> <br/>
        <Information
              content={exhbnDetail.exhbnContent}
              title={exhbnDetail.exhbnTitle}
              number={exhbnDetail.exhbnNum}
              location={exhbnDetail.hallLocation}
              genre={exhbnDetail.exhbnGenre}
              artist={exhbnDetail.exhbnArtist}
              start={exhbnDetail.startDate}
              end={exhbnDetail.endDate}
              price={exhbnDetail.exhbnPrice}
              image={exhbnDetail.exhbnImage}
              rating={rating}
              ratingCount={ratingCount}
            />
      </div>
      <br/>
    </form>
  );
};

export default BookingInfo;

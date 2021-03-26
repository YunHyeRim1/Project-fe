import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Input, Divider, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { AuthContext } from 'context/AuthProvider';
import { FieldWrapper, SwitchWrapper, Label,  Title, TitleInfo, Text } from './Booking.style';
import { TextField } from '@material-ui/core';
import { BOOKING_LIST_PAGE } from 'settings/constant'
import axios from 'axios';

const BookingForm = () => {

  const [ bookName, setBookName ] = useState('')
  const [ bookEmail, setBookEmail ] = useState('')
  const [ bookPnumber, setBookPnumber ] = useState('')

  const URL = 'http://localhost:8080/bookings/add'

  const booking = e => {
    e.preventDefault()
    axios.post(URL, {
      bookName, bookEmail, bookPnumber
    })
    .then(resp => {
      alert(`예매되었습니다.`)
    })
    .catch(err => {
      alert(`예약 실패`)
      throw err;
    })
  }

  return (
    <form> 
      <div>
        <Title>예매자 정보</Title><br/>
        <label>이름</label>
        <Input name="bookName" placeholder = "이름을 입력하세요."
          onChange = { e => { setBookName(`${e.target.value}`) }}
          required />
      </div>
      <div>
        <label>이메일</label>
        <Input name="bookEmail" placeholder = "이메일을 입력하세요." 
          onChange = { e => { setBookEmail(`${e.target.value}`) }}
          required />
      </div>
      <div>
        <label>전화번호</label>
        <Input name="bookPnumber" placeholder = "전화번호를 입력하세요." 
          onChange = { e => { setBookPnumber(`${e.target.value}`) }}
        />
      </div><br/>
        <label>예매정보</label>
        <TitleInfo> 2021-03-15(월), 총 1매 - 대인 1매</TitleInfo>
        <Divider/>
        <Text>합계</Text>
        <TitleInfo> 10,000원 </TitleInfo>
      <br/>
      <Link to={BOOKING_LIST_PAGE}>
      <Button
        className="signin-btn"
        type="submit"
        size="large"
        style={{ width: '100%' }} 
        onClick={ booking }>
          예매하기
        </Button></Link>
    </form>
  );
};

export default BookingForm;

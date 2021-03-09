import React, { useContext, useState, useEffect } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Input, Switch, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { AuthContext } from 'context/AuthProvider';
import { FieldWrapper, SwitchWrapper, Label } from '../Auth.style';
import {TextField} from '@material-ui/core'

const SignUpForm = () => {
  const {control} = useForm();
  const [userid, setUserid] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [preferGenre, setPreferGenre] = useState('')

  const register = e => {
    e.preventDefault()
    axios.post(`/users/save`, {
      userid, password, username, email, gender, birthday, phoneNumber, preferGenre,
      proxy: {
        host: 'localhost',
        port: 8080,
        protocol: 'http'
      }
    })
    .then(resp => {
      alert('회원가입 성공')
    })
    .catch(err => {
      alert('회원가입 실패')
    })
  }

  return (
    <form>
      <FormControl
        label="User ID"
      >
        <Controller
          as={<Input
            onChange = {e => {setUserid(`${e.target.value}`)}}
          />}
          id="userid" 
          name="userid"
          defaultValue=""
          control={control}
          rules={{ required: true }}
        />
      </FormControl>
      <FormControl
        label="Name"
      >
        <Controller
          as={<Input
            onChange = {e => {setUsername(`${e.target.value}`)}}
          />}
          id="username" 
          name="username"
          defaultValue=""
          control={control}
          rules={{ required: true }}
        />
      </FormControl>
      <FormControl
        label="Email Address"
      >
        <Controller
          as={<Input
            onChange = {e => {setEmail(`${e.target.value}`)}}
          />}
          id="email" 
          type="email"
          name="email"
          defaultValue=""
          control={control}
          rules={{ required: true }}
        />
      </FormControl>
      <FormControl
        label="Password"
      >
        <Controller
          as={<Input.Password 
            onChange = {e => {setPassword(`${e.target.value}`)}}
          />}
          id="password"
          name="password"
          defaultValue=""
          control={control}
          rules={{ required: true, minLength: 6, maxLength: 20 }}
        />
      </FormControl>
      <FormControl
        label="Birthday"
      >
        <Controller
          as={<Input
            onChange = {e => {setBirthday(`${e.target.value}`)}}
          />}
          id="birthday" 
          name="birthday"
          defaultValue=""
          control={control}
          rules={{ required: true }}
        />
      </FormControl>
      <FieldWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="rememberMe"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>Remember Me</Label>
        </SwitchWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="termsAndConditions"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>I agree with terms and conditions</Label>
        </SwitchWrapper>
      </FieldWrapper>

      <Button
        className="signin-btn"
        type="primary"
        htmlType="submit"
        size="large"
        style={{ width: '100%' }}
        onClick= {register}
      >
        <MdLockOpen />
        Register
      </Button>
    </form>
  );
};

export default SignUpForm;

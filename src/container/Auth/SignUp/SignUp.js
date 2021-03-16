import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import Logo from 'components/UI/Logo/Logo';
import { LOGIN_PAGE } from 'settings/constant';
import SignUpForm from './SignUpForm';
import SocialLogin from '../SocialLogin';
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from '../Auth.style';

const SignUp = () => {
  
  return (
    <Wrapper>
      <FormWrapper>
        <Logo
          withLink
          linkTo="/"
          src="/images/cart-logo.png"
        />
        <Title>C:ART에 오신 것을 환영합니다.</Title>
        <TitleInfo>다채로운 전시를 통해 예술을 사랑하는 회원님께 감동의 순간을 선사하고자 노력합니다.</TitleInfo>
        <SignUpForm />
        <Divider>다른 방법으로 로그인하기</Divider>
        <SocialLogin />
        <Text>
          이미 계정이 존재합니다! &nbsp;
          <Link to={LOGIN_PAGE}>로그인</Link>
        </Text>
      </FormWrapper>
      <BannerWrapper>
        <img src="/images/login-page-bg.jpg" alt="Auth page banner" />
      </BannerWrapper>
    </Wrapper>
  );
};

export default SignUp;

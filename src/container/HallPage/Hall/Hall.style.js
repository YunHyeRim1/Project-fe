import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HallWrapper = styled.div`
  padding: 100px 0px 50px 0px;

`;

export const HallSidebar = styled.div`
  width: 260px;
  padding: 30px 0px;
  float: left;
  border: 1px solid ${themeGet('text.0', '#2C2C2C')};
  margin-bottom: 20px;

  @media (max-width: 1200px) {
      float: none;
      width: 100%;
    }
`;

export const HallImage = styled.div`
  width: 800px;
  object-fit: cover;
  float: right;
  
  @media (max-width: 1200px) {
    position: static;
    float: none;
    width: auto;
  }

  img.absolute {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;
  }
`;

export const HallInfo = styled.div`
  width: 100%;

  ul {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 14px;
  }

  strong {
    color: ${themeGet('text.0', '#2C2C2C')};
    padding: 0px 50px 0px 0px;
  }

  body {
    background-size: cover;
    background-repeat: no-repeat;
    font-weight: bold;
    font-size: 14px;
  }
  
  .wrap {
    text-align: center;
  }
  
  a {
    -webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    display: block;
    margin: 20px auto;
    max-width: 180px;
    font-weight: bold;
    border-radius: 5px;
    padding: 20px 15px;
    background-color: #97abd1;
  }
  
  a.button {
    color: #ffffff;
    box-shadow: #97abd1 0 0px 0px 2px inset;
  }
  
  a.button:hover {
    color: #ffffff;
    box-shadow: #2c3e5e 0 0px 0px 40px inset;
  }
 
  
`;


export default HallWrapper;
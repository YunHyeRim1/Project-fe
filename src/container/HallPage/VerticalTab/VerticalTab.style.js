import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { style } from 'styled-system';

const VerticalWrapper = styled.div`
    
    padding: 100px 0px 50px 0px;
    display: flex;
    flex-wrap: wrap;
    width: 20%;

    .tabordion {
        color: #333;
        display: block;
        font-family: arial, sans-serif;
        margin: auto;
        position: fixed;
        width: 80%;
      }
      
      .tabordion input[name="sections"] {
        left: -9999px;
        position: absolute;
        top: -9999px;
      }
      
      .tabordion section {
        display: block;
      }
      
      .tabordion section label {
        background: #ccc;
        border:1px solid #fff;
        cursor: pointer;
        display: block;
        font-size: 1.2em;
        font-weight: bold;
        padding: 15px 20px;
        position: relative;
        width: 180px;
        z-index:100;
      }
      
      .tabordion input[name="sections"]:checked + label { 
        background: #eee;
        color: #bbb;
      }
      
      .tabordion input[name="sections"]:checked ~ article {
        display: block;
      }
`;

export const TabWrapper = styled.div`

`;

export default VerticalWrapper;
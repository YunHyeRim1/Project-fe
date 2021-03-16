import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SummaryWrapper = styled.div`
    padding: 40px 0px;

    .posterimage_bottom {
      flex-shrink: 0;
    }
`;

export const PosterImage = styled.div`
  width: 300px;
  height: 400px;
  object-fit: cover;
  float: left;

  @media (max-width: 767px) {
    height: 406px;
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

export const Info = styled.div`
  float: left;
  position: absolute;
  left: 400px;
  width: 100%;

  .pre {
    white-space: pre-wrap;
  }

  ul {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 15px;
  }

  strong {
    padding: 0px 50px 0px 0px;
  }
  
`


export default SummaryWrapper;
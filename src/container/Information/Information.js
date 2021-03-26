import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import InformationWrapper, { Info } from './Information.style';
import Rating from 'components/UI/Rating/Rating';
import { RatingMeta } from '../SinglePageView.style';

const Information = ({
  title,
  location, 
  price,
  image,
  content,
  start, end,
  genre,
  artist,
  titleStyle,
  locationMetaStyle,
  contentStyle,
  rating, ratingCount
}) => {
  
  return (
    <Element name="overview" className="overview">
      <InformationWrapper>
      <Text content={'예매 / 예매 취소 / 환불 / 티켓 수령 등의 자세한 안내사항을 확인해주세요.'} {...contentStyle} /><br/>
        <img src={image}/>
        <h2>{title}</h2>
        <Info>
          <RatingMeta>
              <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
          </RatingMeta>
          <ul>
              <li><strong>가격</strong> <span>{price}</span></li><br />
              <li><strong>장소</strong> <span>{location}</span></li><br />
              <li><strong>기간</strong> <span>{start} ~ {end}</span></li><br />
              <li><strong>장르</strong> <span>{genre}</span></li><br />
          </ul>
          </Info>
      </InformationWrapper>
    </Element>
  );
};

Information.propTypes = {
  titleStyle: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Information.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: '23px',
    lineHeight: ['1.15', '1.2', '1.36'],
    padding: '40px 0px 5px',
  },
  locationMetaStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#909090',
    padding: '0px 0px 40px',
  },
  contentStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
  },
};

export default Information;
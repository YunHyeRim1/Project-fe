import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import DescriptionWrapper from './Description.style';

const Description = ({
  title,
  location,
  content,
  titleStyle,
  locationMetaStyle,
  contentStyle,
}) => {
  
  return (
    <Element name="overview" className="overview">
      <DescriptionWrapper>
        <Heading as="h2" content={title} {...titleStyle} />
        <Text content={location} {...locationMetaStyle} />
        <Text content={content} {...contentStyle} />
      </DescriptionWrapper>
    </Element>
  );
};

Description.propTypes = {
  titleStyle: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Description.defaultProps = {
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

export default Description;

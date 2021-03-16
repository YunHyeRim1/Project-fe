import React from 'react';
import Sticky from 'react-stickynode';
import ScrollBar from 'components/UI/ScrollBar/ScrollBar';
import { TobBarWrapper } from '../SinglePageView.style';

const topBarMenu = [
  {
    name: '작품소개',
    target: 'overview',
  },
  {
    name: '이용정보',
    target: 'amenities',
  },
  {
    name: '부가정보',
    target: 'location',
  },
  {
    name: '이용후기',
    target: 'reviews',
  },
];

const TopBar = () => {
  return (
    <TobBarWrapper>
      <Sticky innerZ={9998} top={80} activeClass="isSticky">
        <ScrollBar
          menu={topBarMenu}
        />
      </Sticky>
    </TobBarWrapper>
  );
};

export default TopBar;

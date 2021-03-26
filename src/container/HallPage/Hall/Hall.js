import React from 'react';
import PropTypes from 'prop-types';
import HallWrapper, { HallImage, HallInfo, HallInnerWrapper, HallSidebar, } from './Hall.style';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';

const Hall = (props) => {
  const {
    hallName,
    hallImage,
    title,
    content,
    titleStyle,
    contentStyle,
  }
= props;

  return (
    <HallWrapper>
      <HallSidebar>
        <ul>
          <li>전시관 1</li>
          <li>전시관 2</li>
          <li>전시관 3</li>
          <li>전시관 4</li>
          <li>전시관 5</li>
          <li>전시관 6</li>
          <li>전시관 7</li>
        </ul>
      </HallSidebar>
      <HallImage>
        <img src="/images/hall-image-1.jpg" alt="" />
        <HallInfo>
          <Heading as="h2" content={title} {...titleStyle} />
          <Text content="서울시립미술관은 모두가 만나고 경험하는 미술관입니다. 서울 근현대사의 자취를 고스란이 간직한 정동 한가운데 위치한 서소문 본관은 르네상스식 건물인 옛 대법원의 파사드와 현대건축이 조화를 이룬 건물입니다. 전시, 교육, 스크리닝, 워크숍, 공연, 토크 등 다양한 프로그램과 더불어 SeMA Cafe+, 예술 서점, 로비 공유 공간, 그리고 야외 조각 공원이 모두에게 다양한 미술 체험에 이르는 길을 제공합니다." {...contentStyle} />
          <br />
          <ul>
            <li><strong>관람시간</strong><span>평일(화-금) 10 AM ~ 8 PM / 토·일·공휴일 10 AM ~ 7 PM</span></li>
            <li><strong>휴관일</strong><span>매주 월요일 / 정기휴관 (1월1일)</span></li>
            <li><strong>주소</strong><span>서울 중구 덕수궁길 61  (서소문동)</span></li>
            <li><strong>대표번호</strong><span> 02-2124-8800</span></li>
          </ul>
          <div class="wrap">
            <a href="#" class="button" >전시보기</a>
          </div>
        </HallInfo>
      </HallImage>
    </HallWrapper>
  );
};



Hall.propTypes = {
    titleStyle: PropTypes.object,
  };
  
  Hall.defaultProps = {
    titleStyle: {
        color: '#2C2C2C',
        fontSize: '25px',
        lineHeight: ['1.15', '1.2', '1.36'],
        padding: '40px 0px 5px',
    },
    contentStyle: {
      fontSize: '14px',
      fontWeight: '400',
      color: '#2C2C2C',
      lineHeight: '1.6',
    },
};

export default Hall;
import React, { Fragment, useState, useEffect } from 'react';
import { useLocation } from 'library/hooks/useLocation';
import Sticky from 'react-stickynode';
import { Row, Col, Modal, Button } from 'antd';
import Container from 'components/UI/Container/Container';
import Loader from 'components/Loader/Loader';
import useWindowSize from 'library/hooks/useWindowSize';
import useDataApi from 'library/hooks/useDataApi';
import isEmpty from 'lodash/isEmpty';
import Hall from './Hall/Hall';
import VerticalTab from './VerticalTab/VerticalTab';
import HallPageWrapper from './HallDetail.style';
import axios from 'axios'

const HallDetail = ({ match }) => {
  const { href } = useLocation();
  const [isModalShowing, setIsModalShowing] = useState(false);
  const { width } = useWindowSize();
  const [ props ] = useState([])
  const [ hallDetail, sethallDetail ] = useState([])

  const URL = `http://localhost:8080/halls/find/`

  useEffect(() => {
    axios.get(URL+match.params.hallNum)
    .then(resp => {
      sethallDetail(resp.data)
    })
    .catch(err => {
      alert(`전시관 진입 실패`)
      throw err;
    })
  }, [])

  if (isEmpty(hallDetail)) return <Loader />;

  const {
    title,
    content,
  } = props;

  return (
    <HallPageWrapper>
      <Container>
        <Row gutter={30}>
          <VerticalTab />
          <Hall
            title={hallDetail.hallName}
            content={hallDetail.hallInfo}
            time={hallDetail.hallTime}
            closedday={hallDetail.hallClosed}
            address={hallDetail.hallLocation}
            pnumber={hallDetail.hallPnumber}
            media={hallDetail.hallImage}
          />
        </Row>
      </Container>
    </HallPageWrapper>
  );
};

export default HallDetail;
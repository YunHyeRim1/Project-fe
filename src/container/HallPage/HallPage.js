import React, { Fragment, useState } from 'react';
import { useLocation } from 'library/hooks/useLocation';
import Sticky from 'react-stickynode';
import { Row, Col, Modal, Button } from 'antd';
import Container from 'components/UI/Container/Container';
import Loader from 'components/Loader/Loader';
import useWindowSize from 'library/hooks/useWindowSize';
import useDataApi from 'library/hooks/useDataApi';
import isEmpty from 'lodash/isEmpty';
import Hall from './Hall/Hall';
import HallPageWrapper from './HallPage.style';

const HallPage = ({ match }) => {
  const { href } = useLocation();
  const [isModalShowing, setIsModalShowing] = useState(false);
  const { width } = useWindowSize();

  let url = '/data/hotel-single.json';
  if (!match.params.slug) {
    url += match.params.slug;
  }
  const { data, loading } = useDataApi('http://localhost:8080/halls/all');
  if (isEmpty(data) || loading) return <Loader />;
  const {
    title,
    content,
  } = data[0];

  return (
    <HallPageWrapper>
      <Container>
        
        <Hall
            title={title}
            content={content}
        />

      </Container>
    </HallPageWrapper>
  );
};

export default HallPage;
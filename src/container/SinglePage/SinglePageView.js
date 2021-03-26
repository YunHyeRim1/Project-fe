import React, { Fragment, useState } from 'react';
import { useLocation } from 'library/hooks/useLocation';
import Sticky from 'react-stickynode';
import { Row, Col, Modal, Button } from 'antd';
import Container from 'components/UI/Container/Container';
import Loader from 'components/Loader/Loader';
import useWindowSize from 'library/hooks/useWindowSize';
import Description from './Description/Description';
import Review from './Review/Review';
import Notice from './Notice/Notice';
import Additional from './Additional/Additional';
import Reservation from './Reservation/Reservation';
import BottomReservation from './Reservation/BottomReservation';
import TopBar from './TopBar/TopBar';
import SinglePageWrapper from './SinglePageView.style';
import useDataApi from 'library/hooks/useDataApi';
import isEmpty from 'lodash/isEmpty';
import Summary from './Summary/Summary';

const SinglePage = ({ match }) => {
  const { href } = useLocation();
  const [isModalShowing, setIsModalShowing] = useState(false);
  const { width } = useWindowSize();

  let url = 'http://localhost:8080/exhbns';
  if (!match.params.slug) {
    url += match.params.slug;
  }
  const { data, loading } = useDataApi('http://localhost:8080/exhbns/all');
  if (isEmpty(data) || loading) return <Loader />;
  const {
    reviews,
    exhbnNum,
    rating,
    ratingCount,
    price,
    title,
    gallery,
    location,
    content,
    author,
    exhbnTitle,
    hallName,
    exhbnContent,
    post
  } = data[0];

  return (
    <SinglePageWrapper>
      <Container>
        <Row gutter={30}>
          <Col xl={16}>
            <Summary
              title={exhbnTitle}
              rating={rating}
              ratingCount={ratingCount}
              shareURL={href} media={gallery}
            />
          </Col>
          <Col xl={8}>
            {width > 1200 ? (
              <Sticky
                innerZ={9999}
                activeClass="isSticky"
                top={190}
                bottomBoundary="#reviewSection"
              >
                <Reservation />
              </Sticky>
            ) : (
              <BottomReservation
                title={title}
                price={price}
                rating={rating}
                ratingCount={ratingCount}
              />
            )}
          </Col>
          <Col xl={8} />
        </Row>

      <TopBar title={title} shareURL={href} author={author} media={gallery} />
      
        <Row gutter={30} id="reviewSection" style={{ marginTop: 30 }}>
          <Col xl={16}>
            <Description
              content={exhbnContent}
              title={exhbnTitle}
              location={hallName}
              rating={rating}
              ratingCount={ratingCount}
            />
            <Notice content={content} title={title} />
          </Col>
        </Row>
        <Row gutter={30}>
          <Col xl={16}>
            <Review
              reviews={reviews}
              ratingCount={ratingCount}
              rating={rating}
            />
          </Col>
          <Col xl={8} />
        </Row>
        <Row gutter={30}>
          <Col xl={16}>
            <Additional content={content} title={title} />
          </Col>
          <Col xl={8} />
        </Row>
      </Container>
    </SinglePageWrapper>
  );
};

export default SinglePage;
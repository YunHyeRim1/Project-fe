import React, { useState, useEffect } from 'react';
import { useStateMachine } from 'little-state-machine';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import AddListingAction from './AddListingAction';
import { FormHeader, Title, FormContent, FormAction } from './AddListing.style';

const BasicInformation = ({ setStep }) => {
  const { action, state } = useStateMachine(AddListingAction);
  const { control, errors, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    action(data);
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <FormHeader>
          <Title>전시회 등록</Title>
        </FormHeader>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="제목"
              htmlFor="hotelName"
              error={errors.hotelName && <span>이 입력란을 작성해주세요!</span>}
            >
              <Controller
                as={<Input />}
                id="hotelName"
                name="hotelName"
                defaultValue={state.data.hotelName}
                control={control}
                placeholder="전시 제목을 입력해주세요."
                rules={{
                  required: true,
                }}
              />
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="장소"
              htmlFor="hotelName"
              error={errors.hotelName && <span>이 입력란을 작성해주세요!</span>}
            >
              <Controller
                as={<Input />}
                id="hotelName"
                name="hotelName"
                defaultValue={state.data.hotelName}
                control={control}
                placeholder="전시 장소를 입력해주세요."
                rules={{
                  required: true,
                }}
              />
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="기간"
              htmlFor="hotelName"
              error={errors.hotelName && <span>이 입력란을 작성해주세요!</span>}
            >
              <Controller
                as={<Input />}
                id="hotelName"
                name="hotelName"
                defaultValue={state.data.hotelName}
                control={control}
                placeholder="전시 기간을 입력해주세요."
                rules={{
                  required: true,
                }}
              />
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="가격"
              htmlFor="hotelName"
              error={errors.hotelName && <span>이 입력란을 작성해주세요!</span>}
            >
              <Controller
                as={<Input />}
                id="hotelName"
                name="hotelName"
                defaultValue={state.data.hotelName}
                control={control}
                placeholder="전시 가격을 입력해주세요."
                rules={{
                  required: true,
                }}
              />
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="장르"
              htmlFor="hotelName"
              error={errors.hotelName && <span>이 입력란을 작성해주세요!</span>}
            >
              <Controller
                as={<Input />}
                id="hotelName"
                name="hotelName"
                defaultValue={state.data.hotelName}
                control={control}
                placeholder="전시 장르를 입력해주세요."
                rules={{
                  required: true,
                }}
              />
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="작가"
              htmlFor="hotelName"
              error={errors.hotelName && <span>이 입력란을 작성해주세요!</span>}
            >
              <Controller
                as={<Input />}
                id="hotelName"
                name="hotelName"
                defaultValue={state.data.hotelName}
                control={control}
                placeholder="전시 작가명을 입력해주세요."
                rules={{
                  required: true,
                }}
              />
            </FormControl>
          </Col>
        </Row>
        <FormControl
          label="전시 소개"
          htmlFor="hotelDescription"
          error={
            errors.hotelDescription && <span>이 입력란을 작성해주세요!</span>
          }
        >
          <Controller
            as={<Input.TextArea rows={5} />}
            id="hotelDescription"
            name="hotelDescription"
            defaultValue={state.data.hotelDescription}
            control={control}
            placeholder="전시 소개글을 입력해주세요."
            rules={{
              required: true,
            }}
          />
        </FormControl>
      </FormContent>
      <FormAction>
        <div className="inner-wrapper">
          <Button type="primary" htmlType="submit">
            다음
          </Button>
        </div>
      </FormAction>
    </form>
  );
};

export default BasicInformation;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, InputWrapper, Form, Input, Submit } from './styled';
import { useComponentId } from './id';
import { addItem } from '../../store/actions/action';

import _uniqueId from 'lodash/uniqueId';

const MainInput = () => {
  const [formData, setFormData] = useState({ link: '', title: '' });

  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
      id: _uniqueId(),
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addItem(formData));
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Form onSubmit={onSubmitHandler}>
          <Input
            onChange={onChangeHandler}
            inputColor="white"
            type="text"
            name="link"
            value={formData.link}
            placeholder="Paste that lick!"
          />
          <Input
            onChange={onChangeHandler}
            inputColor="white"
            type="text"
            name="title"
            value={formData.title}
            placeholder="Name?"
          />
          <Submit
            inputColor="white"
            type="submit"
            placeholder="Name?"
            value="click"
          ></Submit>
        </Form>
      </InputWrapper>
    </Wrapper>
  );
};

export default MainInput;

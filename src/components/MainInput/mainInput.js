import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, InputWrapper, Form, Input, Submit } from './styled';
import { useComponentId } from './id';
import { addItem } from '../../store/actions/action';

import { regex } from '../../regex';
import _uniqueId from 'lodash/uniqueId';

// const regexYT = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*)(?:(\?t|&start)=(\d+))?.*/;

const MainInput = () => {
  const [formData, setFormData] = useState({ link: '', title: '' });
  const [errors, setErros] = useState({});
  const dispatch = useDispatch();

  const errorValidation = useCallback((data) => {
    const error = {};
    if (!regex.test(data.link) || data.link.length === 0) {
      error.link = 'You forgot the linnk';
    }
    if (data.title.length === 0) {
      error.title = 'You forgot the title';
    }

    setErros(error);
  });

  useEffect(() => {
    errorValidation(formData);
    console.log('use effect');
  }, [formData]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    console.table('name,value', name, value);

    setFormData({
      ...formData,
      [name]: value,
      id: _uniqueId(),
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (Object.values(errors).length === 0) {
      dispatch(addItem(formData));
    } else {
      console.log('nije proslo');
    }
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

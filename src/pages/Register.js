import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import styled, { keyframes } from 'styled-components';
import { useStores } from '../stores';
import { useHistory } from 'react-router-dom';


const fade = keyframes`
from {
    opacity: 0;
    transform: translateY(40px);
}
to {
    opacity: 1;
    transform: translateY(0px);
}
`


const Wraper = styled.div`
  max-width: 460px;
  margin: 30px auto;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18), 0 5px 16px 0 rgba(0, 0, 0, 0.17);
  // border-radius: 8px;
  padding: 50px;

  &:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  animation: ${fade} 1500ms ease;
`;

const Title = styled.h2`
  text-align: center;
  padding-bottom:9px;
  margin-bottom: 30px;
  border-bottom:1px solid #eee;
`;

const StyledButton = styled(Button)`
  background:#adc6ff;
  border:none;
  &:hover{
    background-color: #85a5ff;
  }
  &:focus{
    background-color: #85a5ff;
  }
`

// #e6fffb

// #438642


const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 18,
  },
};

const Component = () => {
  const { AuthStore } = useStores();
  const history = useHistory();


  const onFinish = values => {
    console.log('Success:', values);
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.register()
      .then(() => {
        console.log('注册成功, 跳转到首页')
        history.push('/')
      }).catch(() => {
        console.log('登录失败，什么都不做')
      });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const validateUsername = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject('只能是字母数字下划线');
    if (value.length < 4 || value.length > 10) return Promise.reject('长度为4～10个字符');
    return Promise.resolve();
  };

  const validateConfirm = ({ getFieldValue }) => ({
    validator(rule, value) {
      if (getFieldValue('password') === value) return Promise.resolve();
      return Promise.reject('两次密码不一致');
    }
  });



  return (
    <Wraper>
      <Title>
        Register New User</Title>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: '输入用户名',
            },
            {
              validator: validateUsername
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '输入密码',
            },
            {
              min: 4,
              message: '最少4个字符'
            },
            {
              max: 10,
              message: '最大10个字符'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: '再次确认密码',
            },
            validateConfirm
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <StyledButton type="primary" block htmlType="submit">
            <UserAddOutlined />注册
          </StyledButton>
        </Form.Item>
      </Form>
    </Wraper>
  );
};

export default Component;
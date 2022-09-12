import React from 'react';
import { Form, Input, Button } from 'antd';
import styled, { keyframes } from 'styled-components';
import { useStores } from '../stores';
import { useHistory } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

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

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color:#5ab7b4;
`;
const StyledButton = styled(Button)`
background:#5ab7b4;
border: 2px solid #5ab7b4;
box-shadow:none;
&:hover{
  background:#ffffff;
  color:#5ab7b4;
  border: 2px solid #5ab7b4;
}
&:focus{
  background-color: #5ab7b4;
  border: 2px solid #5ab7b4;
  color:#ffffff;
}
`
const ClickRegister = styled.span`
  margin-left: 20px;
  color:#8c8c8c;
`
const A = styled.a`
font-weight:blod;
color:#595959;
&:hover{
  color:#5ab7b4;
}
`


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
    AuthStore.login()
      .then(() => {
        console.log('登录成功,跳转到首页')
        history.push('/');
      }).catch((e) => {
        console.log(e)
        console.log('登录失败')
      })
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const validateUsername = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject('只能是字母数字下划线');
    if (value.length < 4 || value.length > 10) return Promise.reject('长度为4～10个字符');
    return Promise.resolve();
  };

  const handleClick = () => {
    history.push('/register');
  }
  return (
    <Wraper>
      <Title>Login</Title>
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


        <Form.Item {...tailLayout}>
          <StyledButton type="primary" htmlType="submit">
            登录
          </StyledButton>
          <ClickRegister>没有账号？&nbsp;<A onClick={handleClick}><ArrowRightOutlined />&nbsp;点此注册</A></ClickRegister>

        </Form.Item>
      </Form>
    </Wraper>
  );
};

export default Component;
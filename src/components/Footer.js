import React from 'react';
import styled from 'styled-components';
import { YuqueOutlined, GithubOutlined } from '@ant-design/icons';

const Footer = styled.footer`
  padding: 14px 100px;
  text-align: center;
  font-size: 15px;
  color: #aaa;
  background-color:#f5f5f5;
  height:50px;
`;
const A = styled.a`
  color: #aaa;
  margin: 15px;
    :hover{
        color: #40a9ff;
    }
`

function Component() {
  return (
    <Footer>
      <A href='https://github.com/adrianne-a' target='_blank' ><GithubOutlined /></A>

      <A>@&nbsp;Adrianne</A>
      <A href='https://www.yuque.com/adrianne-a' target='_blank' > <YuqueOutlined /></A>
    </Footer>
  );
}

export default Component;
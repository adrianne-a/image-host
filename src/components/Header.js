import React, { useEffect } from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button } from 'antd';
import { useStores } from '../stores';


const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 160px;
  background-color: #353a3f;
  -webkit-animation: dJVbz 1500ms ease;
  animation: dJVbz 1500ms ease;
`;

const A = styled.a`
  color:#fff;
  font-size:1.25rem;
  font-weight:500;
`;

const StyledLink = styled(NavLink)`
  color: #727579;
  margin-left: 30px;
  font-weight:500;

  &.active {
    color:#ffffff;
  }
  
`;

const Login = styled.div`
  margin-left: auto;
  color:#fff;
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
  background-color: #353a3f;
  border:1px solid #fff;
  color:#fff;
  &:hover{
    background-color: #fff;
    border:1px solid #353a3f;
    color:#353a3f;
  }
  &:focus{
    background-color: #fff;
    border:1px solid #353a3f;
    color:#353a3f;
  }

`;


const Component = observer(() => {

  const history = useHistory();
  const { UserStore, AuthStore } = useStores();

  const handleLogout = () => {
    AuthStore.logout();
  };

  const handleLogin = () => {
    console.log('跳转到登录页面')
    history.push('/login');
  };

  const handleRegister = () => {
    console.log('跳转到注册页面')
    history.push('/register');
  }

  useEffect(() => {
    UserStore.pullUser();
  }, [])//eslint-disable-line

  return (
    <Header>
      <A>ImageHost</A>
      <nav>
        <StyledLink to="/" activeClassName="active" className="list-group-item" exact>首页</StyledLink>
        <StyledLink to="/history" activeClassName="active" className="list-group-item" >上传历史</StyledLink>
        <StyledLink to="/about" activeClassName="active" className="list-group-item">关于我</StyledLink>
      </nav>
      <Login>
        {
          UserStore.currentUser ? <>
            Hi,{UserStore.currentUser.attributes.username} <StyledButton type="primary" onClick={handleLogout}>注销</StyledButton>
          </> : <>
            <StyledButton type="primary" onClick={handleLogin}>登录</StyledButton>
            <StyledButton type="primary" onClick={handleRegister}>注册</StyledButton>
          </>

        }
      </Login>

    </Header>
  );
});

export default Component;
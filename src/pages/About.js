import React from 'react'
import { observer } from 'mobx-react'
import styled, { keyframes } from 'styled-components';



// 淡入动画效果, styled-components 暴露出的API
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

const AboutMe = styled.article`
        padding: 20px 40px;
        margin:35px 0;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 6px 0 rgb(0 0 0 / 18%), 0 5px 16px 0 rgb(0 0 0 / 17%);
        font-size: 15px;
        animation: ${fade} 1500ms ease;
        text-align:center;
    `

const About = observer(() => {
  return (
    <AboutMe>
      <p>hello，我是小昭 <span role='img' aria-label="happy">😊</span></p>
      <p>本科就读于内蒙古科技大学计算机科学与技术专业，目前就读于西交利物浦大学金融计算专业，对前端方向比较感兴趣，想从事前端开发。</p>
      <p>这是一个简单的图床，实现了用户的登录，注册，以及上传图片等基本的功能。</p>
      <p>这个项目使用React+React-Router+styled-components+Ant Design来组织页面，使用Mobx管理状态，LeanCloud作为后端保存数据。</p>
      <p>欢迎使用～<span role='img' aria-label="welcome">🎉🎉🎉</span></p>
      <p>-----------------------------------------------------------------------------</p>
      <p>Hello everyone, this is zhaoxi</p>
      <p>My undergraduate degree is in Computer Science and Technology at Inner Mongolia University of Science and Technology,</p>
      <p> and my postgraduate degree is in Financial Computing at the University of Liverpool. </p>
      <p>I am interested in the front-end direction and would like to engage in front-end development.</p>
      <p>This project uses <b>React+React-Router+styled-components+Ant Design</b> &nbsp;
        to organize the page</p>
      <p>Use <b>Mobx</b> to manage the state and <b>LeanCloud</b> as the backend to save the data</p>
      <p>Welcome to use ~</p>
    </AboutMe>
  )
})

export default About;
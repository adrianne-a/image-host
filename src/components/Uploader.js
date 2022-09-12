import React from 'react';
import { useStores } from '../stores';
import { observer } from 'mobx-react';
import { Upload, message, Spin } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Result from './Result';

const { Dragger } = Upload;


const H1 = styled.h2`
  margin:0 0 6px 0;
  // text-align: center;
`;

const PageHeader = styled.div`
    padding-bottom: 9px;
    margin: 10px 0 20px;
    border-bottom: 1px solid #eee;
`
const PageBody = styled.div`
    border:1px solid #ddd;
    border-radius:6px;
    padding:12px 12px 12px 12px;
`
const DraggerStyle = styled(Dragger)`
    
`



const Component = observer(() => {
  const { ImageStore, UserStore } = useStores();
  // const ref1 = useRef();
  // const ref2 = useRef();




  const props = {
    showUploadList: false,
    beforeUpload: file => {
      ImageStore.setFile(file);
      ImageStore.setFilename(file.name);
      if (UserStore.currentUser === null) {
        message.warning('请先登录再上传！');
        return false;
      }
      if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)) {
        message.error('只能上传png/svg/jpg/gif格式的图片');
        return false;
      }
      if (file.size > 1024 * 1024) {
        message.error('图片最大1M');
        return false;
      }
      ImageStore.upload()
        .then((serverFile) => {
          console.log('上传成功')
          console.log(serverFile);
        }).catch(() => {
          console.log('上传失败')
        });
      return false;
    }
  };

  return (
    <div>
      <PageHeader className="page-header" >
        <H1>上传图片</H1>
        图片最大1M
      </PageHeader>
      <PageBody>
        <Spin tip="上传中" spinning={ImageStore.isUpoading}>
          <DraggerStyle {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或者拖拽图片上传</p>
            <p className="ant-upload-hint">
              只能上传svg, png, jpg, jpeg, gif格式的文件, 图片最大1M
            </p>
          </DraggerStyle>
        </Spin>
      </PageBody>

      {
        ImageStore.serverFile ?
          <Result url={ImageStore.serverFile.attributes.url.attributes.url} />
          : null
      }
    </div>
  );
});
export default Component;
import React, { useRef } from 'react';
import styled from 'styled-components'
import { observer, useLocalStore } from 'mobx-react';
import { Input, Popover, message } from 'antd';
import { CopyOutlined, ZoomInOutlined } from '@ant-design/icons';
import copy from 'copy-to-clipboard';
import { useStores } from '../stores'


const Wrapper = styled.div`
    margin-top: 30px;
    border: 1px dashed #ccc;
    padding: 20px;
    border-radius:6px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const ImageWrapper = styled.div`
    margin: 20px 30px;
    border: 1px solid rgba(0,0,0,.2);
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
    padding: 6px;
    max-width:227px;
    max-height:300px;
    flex-direction:row;
`
const Image = styled.img`
    max-width: 100%;
    max-height:100%;
    display:block;
    margin:auto;
`;
const ImageDiv = styled.div`
    width: 213px;
    height: 160px;
`
const ImageText = styled.div`
display: block;
    text-align: center;
    padding-top: 4px;
    font-size: 11px;
    color: #777;
    max-height:70px;
    margin-bottom: 14px;
    
`
const ImageTextName = styled.div`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 160px;
    margin:auto;
`
const ImageTextSize = styled.div`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 160px;
    margin:auto;
`
const AdjustmentSize = styled.div`
    text-align:right;
    position:relative;
`
const InputSize = styled.input`
    border:1px solid #6e757c;
    border-radius: 3px;
    margin-bottom:5px;
    max-width:110px;
    outline:none;
    &:focus{
        border:1px solid #95bee6;
        box-shadow: 0 0 6px #95bee6;
    }
    
`
//link

const ResultLink = styled.div`
    margin-right:30px;
    margin-top:20px;
`
const InputLink = styled(Input)`
    width: 500px;
`
const ZoomInOutlinedStyled = styled(ZoomInOutlined)`
    font-size:24px;
    color:#353a3f;
`
const View = styled.div`
    position:absolute;
    top:43%;
    left:4%;
 
`
const CopyOutlinedStyled = styled(CopyOutlined)`
    padding:5px 5px 5px 5px;
`

const Result = observer(() => {
    const { ImageStore } = useStores();
    const ref1 = useRef();
    const ref2 = useRef();

    const bindWidthChange = () => {
        console.log('bindWidthChange...')
        console.log(ref1.current.value)
        store.setWidth(ref1.current.value);
    };

    const bindHeightChange = () => {
        store.setHeight(ref2.current.value);
    };
    const store = useLocalStore(() => ({
        width: null,
        setWidth(width) {
            store.width = width;
        },
        get widthStr() {
            return store.width ? `/w/${store.width}` : '';
        },
        height: null,
        setHeight(height) {
            store.height = height;
        },
        get heightStr() {
            return store.height ? `/h/${store.height}` : '';
        },
        get fullStr() {
            //?imageView2/0/w/800/h/400)
            return ImageStore.serverFile.attributes.url.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr
        }

    }));


    const refURL = useRef(null);
    const refHTML = useRef(null);
    const refMarkdown = useRef(null);

    const copyLink = (ref, method) => {
        return () => {
            if (method === 'URL') {
                copy(ref.current.state.value);
                message.success('拷贝URL成功!');
            } else if (method === 'HTML') {
                copy(`<img src="${ref.current.state.value}" alt=""/>`);
                message.success('拷贝HTML成功!');
            } else if (method === 'Markdown') {
                copy(`![](${ref.current.state.value})`);
                message.success('拷贝Markdown成功!');
            }
        }
    }


    const handleHTML = (ref) => {
        return `<img src="${ref}" alt=""/>`
    };
    const handleMarkdown = (ref) => {
        return `![](${ref})`;
    };

    const AlreadyCopyText = (
        <p>已复制</p>
    );

    return (
        <Wrapper>
            <ImageWrapper>
                <ImageDiv>
                    <Image src={ImageStore.serverFile.attributes.url.attributes.url} />
                </ImageDiv>
                <ImageText>
                    <ImageTextName>{ImageStore.filename}</ImageTextName>

                    <ImageTextSize>
                        {`(${((ImageStore.file.size) / 1024).toFixed(2)})KB`}
                        {/* {"(" + ((ImageStore.file.size) / 1024).toFixed(2) + ")" + "KB"} */}
                    </ImageTextSize>

                </ImageText>

                <AdjustmentSize>
                    <View><a
                        target="_blank"
                        href={store.fullStr}
                        rel="noopener noreferrer"
                    ><ZoomInOutlinedStyled /></a></View>

                    <InputSize ref={ref1} onChange={bindWidthChange} placeholder="最大宽度（可选）" />
                    <InputSize ref={ref2} onChange={bindHeightChange} placeholder="最大高度（可选）" />
                </AdjustmentSize>

            </ImageWrapper>
            <ResultLink>
                <ul>
                    <li><h3>结果链接</h3></li>
                    <li>
                        <h4>URL:</h4>
                        <InputLink value={store.fullStr} ref={refURL}></InputLink>
                        <Popover content={AlreadyCopyText} trigger="click" onClick={copyLink(refURL, "URL")}>

                            <CopyOutlinedStyled />
                        </Popover>

                    </li>
                    <li>
                        <h4>HTML:</h4>
                        <InputLink value={handleHTML(store.fullStr)} ref={refHTML}></InputLink>
                        <Popover content={AlreadyCopyText} trigger="click" onClick={copyLink(refURL, "HTML")}>
                            <CopyOutlinedStyled />
                        </Popover>
                    </li>
                    <li>
                        <h4>Markdown:</h4>
                        <InputLink value={handleMarkdown(store.fullStr)} ref={refMarkdown}></InputLink>
                        <Popover content={AlreadyCopyText} trigger="click" onClick={copyLink(refURL, "Markdown")}>
                            <CopyOutlinedStyled />
                        </Popover>
                    </li>
                </ul>
            </ResultLink>

        </Wrapper>
    )
});

export default Result;
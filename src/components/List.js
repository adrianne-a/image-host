import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { List, Spin } from 'antd';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import { useStores } from '../stores';



const ImgBorder = styled.div`
    width:130px;
    height:100px;
    overflow:hidden;

`
const Img = styled.img`
    max-width:100%;
    margin:auto;
    display:block;
`
const ImgName = styled.div`
    margin: 0 60px;
    width: 300px;
`
const ImgLink = styled.div`
    margin: 0 20px;
    max-width: 500px;
`

const Component = observer(() => {
    const { HistoryStore } = useStores();

    const loadMore = () => {
        HistoryStore.find()
    };

    useEffect(() => {
        console.log('in');

        return () => {
            console.log('out');
            HistoryStore.reset();
        }
    }, [])//eslint-disable-line

    return (
        <div>
            <InfiniteScroll
                initialLoad={true}
                pageStart={0}
                loadMore={loadMore}
                hasMore={!HistoryStore.isLoading && HistoryStore.hasMore}
                useWindow={true}
            >
                <List
                    dataSource={HistoryStore.list}
                    renderItem={
                        item => <List.Item key={item.id}>

                            <ImgBorder>
                                <Img src={item.attributes.url.attributes.url}></Img>
                            </ImgBorder>
                            <ImgName>
                                <h4>图片名</h4>
                                <h5>{item.attributes.filename}</h5>
                            </ImgName>
                            <ImgLink>
                                <h4>图片链接</h4>
                                <a target="_black" href={item.attributes.url.attributes.url}>{item.attributes.url.attributes.url} </a>
                            </ImgLink>
                        </List.Item>
                    }
                >
                    {HistoryStore.isLoading && HistoryStore.hasMore && (
                        <div>
                            <Spin tip="加载中"></Spin>
                        </div>
                    )}

                </List>
            </InfiniteScroll>
        </div>
    );
});

export default Component;
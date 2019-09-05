import React, { Fragment } from 'react';
import VideoList from './VideoList';
import VideoPane from './VideoPane';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    mid-width: 200px;
    display: flex;
    flex-direction: row;
`;

export default function VideoPlayer({ dispatch, videoSelected, videos }) {
    return (
        <Fragment>
            <h1>Video Player</h1>
            <Wrapper>
                <VideoPane
                    videoSelected={videoSelected}
                    videos={videos}
                />
                <VideoList
                    dispatch={dispatch}
                    videos={videos}
                />
            </Wrapper>
        </Fragment>
    );
}

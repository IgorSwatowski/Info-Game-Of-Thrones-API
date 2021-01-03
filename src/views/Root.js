import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 140px;
`
const InfoTop = styled.h2`
  font-family: 'Arial';
`

const Root = () => {
  return (
    <Wrapper>
      <InfoTop>I welcome you to Game Of Thrones info database :)</InfoTop>
    </Wrapper>
  );
};

export default Root;
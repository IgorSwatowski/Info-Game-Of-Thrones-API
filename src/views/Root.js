import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components ============================
import CharactersList from './Mainpage/components/CharactersList';

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
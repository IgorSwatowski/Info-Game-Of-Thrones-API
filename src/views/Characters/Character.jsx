import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-top: 24px;
    padding-left: 24px;
`

export const CharacterSimple = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 24px;
    background-color: #1F1F1F;
    color: #fff;
    font-family: 'Arial';
    padding: 34px;
    width: 420px;
`
export const CharacterGender = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-top: 12px;
    color: #fff;
    list-style: none;
`

const Character = ({ characterData: { name, gender} }) => {

  return (
    <Wrapper>
      <CharacterSimple>
        {name}
        <CharacterGender>
          {gender ? <div>Gender: {gender}</div> : <div>Gender: It's not definded on outside API</div>}
        </CharacterGender>
      </CharacterSimple>
    </Wrapper>
  );
};

Character.propTypes = {
  characterData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Character;

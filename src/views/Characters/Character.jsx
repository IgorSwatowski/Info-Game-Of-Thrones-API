import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    padding-top: 24px;
    padding-left: 24px;
`

const Character = ({ characterData: { name } }) => {

  return (
    <Wrapper>
        {name}
    </Wrapper>
  );
};

Character.propTypes = {
  characterData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Character;

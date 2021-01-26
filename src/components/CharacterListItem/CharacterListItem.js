import React from 'react';
import PropTypes from 'prop-types';

// Components ===================================
import { 
  Wrapper, 
  CharacterSimple, 
  CharacterGender,
  CharacterHouse,
  CharacterImage  
} from './characterListItemStyles';

const CharacterListItem = ({ characterData: { name, gender, allegiance, image} }) => {

  return (
    <Wrapper>
      <CharacterSimple>
        {name}
        <CharacterImage>
          {image ? <img src={image} alt="" style={{width: '240px', height: '300px'}}/> : <div>This person not have photo</div>}
        </CharacterImage>
        <CharacterGender>
          {gender ? <div>Gender: {gender}</div> : <div>Gender: It's not definded on outside API</div>}
        </CharacterGender>
        <CharacterHouse>
          {gender ? <div>Allegiance: {allegiance}</div> : <div>Allegiance: It's not definded on outside API</div>}
        </CharacterHouse>
      </CharacterSimple>
    </Wrapper>
  );
};

CharacterListItem.propTypes = {
  characterData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterListItem;

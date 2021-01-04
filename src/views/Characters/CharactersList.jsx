import React, { useState, useEffect } from 'react';
import { api, endpoints } from '../../api';

//Components ========================
import Character from './Character';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get(endpoints.characters)
      .then(({ data } ) => {
        setCharacters(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div>
      {characters.length 
      ? characters.map(character => <Character key={character.name} characterData={character} />)
      : <h2>There is nothing</h2>}
    </div>
  );
}

CharactersList.propTypes = {};

export default CharactersList;

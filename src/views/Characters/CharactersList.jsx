import React, { useState, useEffect } from 'react';
import { api, endpoints } from 'api';

const CharactersList = () => {
  const [characters] = useState([]);

  useEffect(() => {
    api.get(endpoints.characters)
      .then(({ data } ) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div>
      {characters.length 
      ? characters.map(character => <div key={character.name} />)
      : <h2>There is nothing</h2>}
    </div>
  );
}

CharactersList.propTypes = {};

export default CharactersList;

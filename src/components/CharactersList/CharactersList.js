import React, { useState, useEffect } from 'react';
import { api, endpoints } from '../../api';

// Components =============================
import Pagination from '../../components/Pagination/Pagination';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

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

  const [pageNumber, setPageNumber] = useState(0);

  const charactersPerPage = 5;
  const pagesVisited = pageNumber * charactersPerPage;
    
    
  const changePage = ({ selected }) => {
      setPageNumber(selected);
  }
  
  const displayCharacter = characters
  .slice(pagesVisited, pagesVisited + charactersPerPage)
  .map((character) => {
    return (
      <CharacterListItem key={character.name} characterData={character} />
    )
  })

  return (
    <div>
      {displayCharacter}
      <Pagination 
        previousLabel={'Previous'}
        nextLabel={'Next'}
        onPageChange={changePage}
      />
    </div>
  );
}


export default CharactersList;

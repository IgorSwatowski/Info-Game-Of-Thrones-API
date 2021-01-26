import React, { useState, useEffect } from 'react';
import { api, endpoints } from '../../api';
import ReactPaginate from 'react-paginate';

//Components ========================
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

  const displayCharacter = characters
    .slice(pagesVisited, pagesVisited + charactersPerPage)
    .map((character) => {
      return (
        <CharacterListItem key={character.name} characterData={character} />
      )
    })

  const pageCount = Math.ceil(characters.length / charactersPerPage);
  
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div>
      {displayCharacter}
      <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
      />
    </div>
  );
}

CharactersList.propTypes = {};

export default CharactersList;

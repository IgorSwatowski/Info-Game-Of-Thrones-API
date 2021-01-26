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
    margin-top: 42px;
    color: #fff;
    list-style: none;
    border: 1px solid #fff;
    padding: 12px;
    width: 320px;
`
export const CharacterHouse = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  margin-top: 12px;
  color: #fff;
  list-style: none;
  border: 1px solid #fff;
  padding: 12px;
  width: 320px;
`

export const CharacterImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 34px;
`
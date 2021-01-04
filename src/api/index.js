import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.got.show/api/',
})

export const endpoints = {
    characters: 'book/characters'
}
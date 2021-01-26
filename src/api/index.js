import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.got.show/api/',
})

export const endpoints = {
    image: 'book/characters/image',
    characters: 'book/characters',
    gender: 'book/characters/gender',
    allegiance: 'book/characters/allegiance',
}
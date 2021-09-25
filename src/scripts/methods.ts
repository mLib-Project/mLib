import axios, { AxiosResponse } from 'axios';
import { Book } from '../data/types'

export const formatStrings = (string: string): string => {
    const newString:string = string
        .toLowerCase()
        .replaceAll(/\s+/g, '')
        .replaceAll('ą', 'a')
        .replaceAll('ć', 'c')
        .replaceAll('ę', 'e')
        .replaceAll('ń', 'n')
        .replaceAll('ó', 'o')
        .replaceAll('ś', 's')
        .replaceAll('ż', 'z')
        .replaceAll('ź', 'z');
    return newString
}

export const toCapitalCase = (string:string):string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getImgUrl = (img: string):string => {
    const pic = formatStrings(img)
    try {
     return require('../assets/thumbnails/' + pic + '.svg') 
    } catch (err) {
      console.log(err)
      try {
        return require('../assets/thumbnails/' + pic + '.png') 
      } catch (err) {
          return require('../assets/thumbnails/null.svg') 
      }
    }
}

export const fetchBooks = async ():Promise<Book[]> => {
    const res = await axios.get('http://localhost:80/api')
    const books = res.data
    return books
}

  //    let unique = [...new Set(categories)]

export const fetchCategories = async () => {
    const database = await axios.get('http://localhost:80/api')
    let books = database.data
    books = books.map((book:Book) => book.category)
    const unique = [...new Set(books)]
    return unique

}
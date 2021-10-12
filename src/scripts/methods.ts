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

export const toCapitalCase = (str:string):string => {
    const splitStr = str.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

export const getImgUrl = (img: string):string => {
    const pic = formatStrings(img)
    return process.env.BASE_URL + 'thumbnails/' + pic + '.svg'
}

export const fetchBooks = async ():Promise<Book[]> => {
    const res = await axios.get('/api')
    const books = res.data
    return books
}

  //    let unique = [...new Set(categories)]

export const fetchCategories = async () => {
    const database = await axios.get('/api')
    let books = database.data
    books = books.map((book:Book) => book.category)
    const unique = [...new Set(books)]
    return unique

}
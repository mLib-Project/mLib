import axios, { AxiosResponse } from 'axios';
import { Book } from '../data/types'

export const formatStrings = (string: string): string => {
    const newString:string = string
        .toLowerCase()
        .replaceAll(/\s+/g, '')
        .replaceAll('ą', 'a')
        .replaceAll('ć', 'c')
        .replaceAll('ę', 'e')
        .replaceAll('ł', 'l')
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
    const res = await axios.get('//localhost/api')
    const books = res.data
    return books
}

//    let unique = [...new Set(categories)]

export const fetchCategories = async () => {
    const database = await axios.get('//localhost/api')
    const cat = database.data.map((book:Book) => book.category)
    const uniquecat = [...new Set(cat)]
    const fam:number[] = []
    for (let i=0;i<uniquecat.length;i++) {
        const newfam = database.data.find((book:Book) => book.category === uniquecat[i]).family
        fam.push(parseInt(newfam))
    }
    return {
        0: uniquecat, 
        1: fam, 
    }

}
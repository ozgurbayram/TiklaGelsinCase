import { Product } from '../types';
import data from '../data.json'

export const getProducts = ():Product[] =>{
    return data
}
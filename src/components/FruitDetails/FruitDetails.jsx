import React from 'react'
import MediaCard from './imageCard'
import GenusCard from './genusCard'
import Family from './family'
import './fruitdetails.css'
import Order from './order'
import NutritionCard from './NutritionCard'
import { ImageData } from '../Images.'

export default function FruitDetails({item}) {

 const details= ImageData.map((item)=>{
  return item.id
 })
 
  return (
    

  <div className='container'>
    <div className='media'><MediaCard media={details} item={item}/></div>
    <div className='fam'> <NutritionCard item={item}/></div>
    <div className='gfo'>
    <div className='genus'> <GenusCard item={item}/></div>
    <div className='family'> <Family item={item}/></div>
    <div className='order'> <Order item={item}/></div>
    </div>
   
  </div>
   
  )

}

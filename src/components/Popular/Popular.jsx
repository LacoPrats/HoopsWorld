import React from 'react'
import {data} from '../../assets/LIST/itemlist'
import Item from '../Item/Item'
import './Popular.css'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Hot Items</h1>
      <div className='popular-item'>
{data.map((item,i)=>{
return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
      </div>
    </div>
  )
}

export default Popular

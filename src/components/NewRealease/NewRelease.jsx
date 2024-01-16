import React from 'react'
import {release} from '../../assets/LIST/newrealeaselist'
import Item from '../Item/Item'
import './NewRelease.css'

const NewRelease = () => {
  return (
    <div className='newrelease'>
      <h1>New Releases</h1>
      <div className="releases">
{release.map((item,i)=>{
    return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
      </div>
    </div>
  )
}

export default NewRelease

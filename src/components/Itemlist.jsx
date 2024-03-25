import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { image } from '../utils/constants';
const Itemlist = ({items}) => {
    console.log("items:",items)
  return (
    <div className=''>
        {items.map((item)=>(
        <div className='item-con' 
        key={item.card.info.id}>
<div className='span-con'>
        <div className='span-p'>
        <span className='span-title'>{item.card.info.name}</span>
        <span className='fa-con'><FaRupeeSign className="fasign"/>{item.card.info.price?item.card.info.price / 100: item.card.info.defaultPrice/100}</span>
        </div>
        <p className='span-text'>{item.card.info.description}</p>        
        </div>
        <div className='btn-con'>
            <div><button className='btn-add'>ADD+</button>
      {item.card.info.imageId && <img src={image+item.card.info.imageId} alt="" className='img-des'/>}
      
      </div>
    

        </div>
        
    </div>
    
  )
        )
}
</div>)}
export default Itemlist;
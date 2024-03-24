// import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import UseResturantmenu from '../utils/UseResturantmenu';

const Resturantmenu = () => {
    // const[restlist,setRestlist]=useState(null);

   

    // const menu_url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
    const {id}=useParams();
    // const menu_api=menu_url+id;
    // // console.log(menu_api);
    // useEffect(()=>{
    //     fetchMenu
    const restlist=UseResturantmenu(id);
       
    //        const fetchMenu=async()=>{
    //            const data=await fetch(menu_api);
    //            const res=await data.json();
    //            setRestlist(res);
    //            console.log(res);
    //        }

if(restlist===null) return <Shimmer/>

const{name,city,costForTwoMessage,costForTwo}=restlist.data.cards[0].card.card.info
const{itemCards}=restlist.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
console.log(itemCards)
  return (<div>
    <h1>{name}</h1>
    <p>{city}</p>
    <h3>{costForTwoMessage}</h3>
    <h4>{costForTwo}</h4>
    <div>
        <ul>
            {itemCards.map((each)=>(<li>{each.card.info.name}
            -Rs- {each.card.info.price/100}</li>))}
        </ul>
    </div>

  </div>)
}

export default Resturantmenu
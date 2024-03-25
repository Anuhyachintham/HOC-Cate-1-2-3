// import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import UseResturantmenu from '../utils/UseResturantmenu';
import ResturantCategory from './ResturantCategory';

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

const{name,cuisines,costForTwoMessage,costForTwo}=restlist.data.cards[0].card.card.info
// const{itemCards}=restlist.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
// console.log(itemCards)
const categories=restlist?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((each)=>each.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 console.log("categories",categories)
 return (<div className='menu-con'>
    <h1>{name}</h1>
    <p className='cust'>{cuisines.join(",")}</p>
    <h3>{costForTwoMessage}</h3>
    <h4>{costForTwo}</h4>
    
        
    {categories.map((each)=><ResturantCategory data={each.card.card}/>)}
           
   
  </div>)
}

export default Resturantmenu
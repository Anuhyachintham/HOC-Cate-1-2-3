import React, { useEffect } from 'react'
import { useState } from 'react'
import Resturantcard from './Resturantcard'
import Shimmer from './Shimmer'
import "../App.css"
import { Link } from 'react-router-dom'

const Body = () => {

  const[restlist,setRestlist]=useState([])
 
  const[search,setSearch]=useState("");
  // const[dummyData,setDummyData]=useState([])
useEffect(()=>{
fetchData()
},[])

const fetchData =async()=>{
  try{
 const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

const response=await data.json();
console.log(response);
//console.log(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
setRestlist(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
}

catch (error) {
  console.error("Error fetching data:", error);
}
}

const filteredData=()=>{
 const filData= restlist.filter(each=>each.info.avgRating>4.5)
 setRestlist(filData)
//console.log(filData);
}
  return restlist.length===0?(<Shimmer/>):(
    <>
    <div className=''>
      <button onClick={filteredData}>Top rated resturant</button>
      <input type="text"  onChange={(e)=>{setSearch(e.target.value);console.log(e.target.value)}} placeholder='search'/>
      <button onClick={()=>{let searchData=restlist.filter((each)=>each.info.name.toUpperCase().includes(search.toUpperCase()))
console.log(searchData);
setRestlist(searchData)
}}>search</button>
</div>
<div className='Res-Cardinfo'>
{restlist.map((item)=><Link className="custom-link" to={"./restutants/"+item.info.id}>
  <Resturantcard key={item.info.id} resData={item}/></Link>)}
</div>

</>
  )
}

export default Body
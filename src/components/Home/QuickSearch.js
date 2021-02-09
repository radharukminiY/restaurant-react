import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickSearch =(props) =>{
   const renderList =({quickData}) => {
     if(quickData){
       return quickData.map((item) => {
         return(
           <Link to={`/listing/${item._id}`}>
           <div className="tileComponent">
           <img src={`/images/${item.name}.png`} className="imageStyle"/>
           </div>
           <div className="tileComponent2">
           <div class="componentHeading">
           {item.name}
           </div>
           <div class="componentSubHeading">
           start your day with delicious {item.name} options
           </div>
           </div>
           </div>
           </Link>
         )
       })
     }
   }
   return(
     <div className="quickSearchContainer">
     <p class="quickSearchHeading">
     Quick searches
     </p>
     <p class="quickSearchSubHeading">
     Discover restaurents by Meal mealType
     </p>
     {renderList(props)}
     </div>
   )
}
export default QuickSearch;

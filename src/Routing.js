import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import Home from './component/Home/Home';
import Details from './component/details/listingApi';
import DisplayApi from './component/details/HotelApi';
import Listing from './component/booking/DisplayAPi';
import PlaceBooking from './component/booking/placeBooking';


const Routing = ()=>{
  return(
    <BrowserRouter>
    <Route exact path ="/" component={Home}/>
    <Route exact path ="/listing/:id" component={Listing}/>
    <Route exact path ="/details/:id" component={Details}/>
    <Route exact path ="/viewbooking" component={DisplayApi}/>
    <Route exact path ="/booking/:name" component={PlaceBooking}/>
    </BrowserRouter>
  )
}

export default Routing;

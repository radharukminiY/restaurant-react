import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const url = "https://eduintern.herokuapp.com/city";
const rurl = "https://eduintern.herokuapp.com/rest?city="

class Search extends Component{

    constructor(props){
        super(props)

        this.state={
            city:'',
            rest:''
        }
    }

    //Display City in option
    renderCity = (data) => {
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.city}>{item.name} |
                     {item.city_name}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>{item.name} |
                    {item.locality}</option>
                )
            })
        }
    }

    handleCity=(event)=>{
        console.log(event.target.value)
        const cityId = event.target.value;
        fetch(`${rurl}${cityId}`,{method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            this.setState({rest:data})
        })
    }

    render(){
        return(
            <React.Fragment>
                <div class="imageContainer">
                <div style={{textAlign:'right'}}>
                <a className="fb myfont" href="https://www.facebook.com/" target="_blank">
                <img src="/images/fb.png" className="social_logo" alt="fb"/>
                </a>
                <a class="yt myfont" href="https://www.youtube.com/developerfunnel" target="_blank">
                <img src="/images/youtube.png" className="social_logo" alt="yt"/>
                </a>
                </div>
                <div id="logo">
                <b>E!</b>
                    </div>
                    <div id="heading"><strong>
                        Find Best Restaurants, Cafes, bars</strong>
                    </div>
                    <div className="locationSelector">
                    <select class="dropdown" onChange={this.handleCity}>
                    <option>----SELECT CITY----</option>
                    {this.renderCity(this.state.city)}
                    </select>
                    <select className="dropdown">
                    {this.renderRest(this.state.rest)}
                    </select>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data)=> this.setState({city:data}))
        .catch((err) => console.log(err))
    }
}

export default withRouter(Search);

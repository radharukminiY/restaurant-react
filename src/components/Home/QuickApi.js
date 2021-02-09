import React,{Component} from 'react';
import QuickSearch from './QuickSearch';

const url="";

class QuickAPi extends Component{
  constructor(){
    super()
    this.state={
      mealType:''
    }
  }
  render(){
    return(
      <QuickSearch quickData={this.state.mealType}/>
    )
  }

  componentDidMount(){
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
      this.setState({mealType:data})
    })
  }
}
export default QuickApi;

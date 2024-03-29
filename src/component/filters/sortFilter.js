import React,{Component} from 'react';
import axios from 'axios';

const url = "https://eduintern.herokuapp.com/rest?mealtype="

class SortFilter extends Component{
    sortfilter = (event) => {
        let mealId=sessionStorage.getItem('mealId')
        let sort = event.target.value
        const costUrl=`${url}${mealId}&sort=${sort}`
        axios.get(costUrl)
            .then((response) => {this.props.restPerSort(response.data)})

    }
    render(){
        return(
            <React.Fragment>z
                <center>Sort</center>
                <div onChange={this.sortfilter}>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>Low - High
                    </label>
                    <label className="radio">
                        <input type="radio" value="-1" name="cuisine"/>High - Low
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default SortFilter;

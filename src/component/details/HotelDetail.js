import React,{Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../../Header';
import {Link} from 'react-router-dom';

const url ="https://eduintern.herokuapp.com/rest"

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    render(){
        let {details} = this.state
        return(
            <>
            <Header/>
            <br/>
            <div className="container">

                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.state.details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb} alt="img"
                                style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                            </div>
                        </div>
                        <hr/>
                        <Tabs>
                            <TabList>
                                <Tab>OverView</Tab>
                                <Tab>Contact</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>About This Place</h2>
                                <p>{details.name} is good place for food and family,friend's time.</p>
                            </TabPanel>
                            <TabPanel>
                                <h2>Contact Us</h2>
                                <h3>{details.address}</h3>
                                <h3>Phone: 7654890686</h3>
                            </TabPanel>
                        </Tabs>
                        <Link to="/" className="btn btn-danger">Back</Link> &nbsp;
                        <Link to={`/booking/${details.name}`} className="btn btn-success">Proceed Order</Link>
                    </div>
                </div>
            </div>
            </>
        )
    }

    componentDidMount(){
        const hotelId=this.props.match.params.id
        axios.get(`${url}/${hotelId}`)
        .then((res) => {this.setState({details:res.data[0]})})

    }
}

export default Details;

import React, {Component} from 'react';
import {Figure} from 'react-bootstrap'
import '../containers/App.css';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const BASE_URL = process.env.REACT_APP_BASE_URL

class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            name: '',
            description: '',
            image: null
        }
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/api/v1/beer`)
        .then(res => {
            console.log(res);
            this.setState({beers: res.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        // console.log(this.state);
        return(
            <div>
            {this.state.beers.map(beer => 
                <Figure key={beer.id} className="mt-3 mr-3 beeritem">
                    <Figure.Image width={120} height={120} alt="beer" src={beer.image}/>
                    <Figure.Caption className="text-white">
                        {beer.name}
                    </Figure.Caption>
                </Figure>)}
            </div>
            
        )
    }

}

export default Beer
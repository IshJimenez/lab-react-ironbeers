import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar'

function BeersDetail(props) {
    let [beer, setbeers] = useState({})

    useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
    .then(res => {
        console.log(res)
        setbeers(res.data)
    })
    }, []
    );

    console.log(props.match.params.id)
    return (
        <div>
            <Navbar />
            <h1>{beer.name}</h1>
            <img src={beer.image_url} alt="whoop whoop" />
        </div>
    );
}

export default BeersDetail;
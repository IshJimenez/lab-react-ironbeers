import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

function Beers() {
    let [beers1, setbeers] = useState([''])

    useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(res => {
        console.log(res)
        setbeers(res.data)
    })
    }, []
    )


        const showbeers = () => {
            return beers1.map(eachbeer => {
                return (
                    <li className="beerList">
                        <Link to={`/beers/${eachbeer._id}`}>
                    {eachbeer.name} </Link> <img src={eachbeer.image_url}/>
                    </li>
                )
            })
        }

    return (
        <div>
            <Navbar />
            {showbeers()}
        </div>
    );
}

export default Beers;
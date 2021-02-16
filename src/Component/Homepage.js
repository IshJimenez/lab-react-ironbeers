import React from 'react';
import { Link } from 'react-router-dom';
import beers from './beers.png'
import randomBeer from './randomBeer.png'
import newBeer from './newBeer.png'

function Homepage() {
return (
    <div>
            <h2>IronBeers</h2>
        <div>
            <Link to="/beers">
            <img src={beers} alt="better work bitch" />
            <p>Blah blah look at me im so cool and love beers all of them. I SAID ALL OF THEM.</p>
            <h2>All the Cerbezas</h2>
            </Link>
        </div>
        <div>
            <Link to="/randomBeer">
            <img src={randomBeer} alt="more ugh" />
            <p>Hey kids you like beer pick a random one</p>
            <h2>Random Cerbeza</h2>
            </Link>
        </div>
        <div>
            <Link to="/newBeer">
                <img src={newBeer} alt="better" />
                <p>Hey kids get crunk</p>
                <h2>B#$%h its a new beer</h2>
            </Link>
        </div>
        </div>


)
}

export default Homepage;
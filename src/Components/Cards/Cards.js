import React from 'react'
import '../../Styles/Cards/Cards.css'

function Cards() {
    return (
        <div className="cards">
            <div className="cards__avatar">
                <img src="https://res.cloudinary.com/sandeepsush/image/upload/v1613062334/pqsgctoy07jei98xluv0.jpg" alt=""/>
            </div>
            <div className="cards__details">
                <h3>Sandeep Dhungana</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
            </div>
        </div>
    )
}

export default Cards

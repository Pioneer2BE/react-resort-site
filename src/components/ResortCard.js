import React from 'react'

const ResortCard = (props) => {

    const image = require(`../assets/img/${props.pic}`).default

    return (
        <div class="resort-card">

            <a href = "html/resort-description.html"> 
                <img src={image} alt=""/>   
            </a> 

            <div class="resortContent">
                <h3>{props.resort_name}</h3>
                <p>${props.price}.00 per night</p>
            </div>

        </div>
    )
}

export default ResortCard

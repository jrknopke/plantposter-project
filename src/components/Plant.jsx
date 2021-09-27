import React from 'react';

const Plant = ({plant}) =>
    
    <div class="a" >
        <h3> {plant.name} </h3>
        <h4> {plant.family} </h4>
        <p > {plant.color} </p>
        <br></br>
    </div>

export default Plant
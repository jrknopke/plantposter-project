import React from 'react';

const Plant = ({plant}) =>
    <div>
        <h3> {plant.name} </h3>
        <p> {plant.color} </p>
        <br></br>
    </div>

export default Plant
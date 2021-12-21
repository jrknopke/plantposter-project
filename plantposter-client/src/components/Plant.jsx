import React from 'react';
import DeleteButton from './DeleteButton';

export default function Plant(props) {
    const { name, family, color } = props.plant
    
    return(
    <div className='plant'>
        <h3> {name} </h3>
        <h4> {family} </h4>
        <p > {color} </p>
        <br></br>
        <DeleteButton plant={props.plant}/>
    </div>
    )
}
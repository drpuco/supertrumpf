import * as React from 'react';
import './Card.css';
import Animal from './Animal';
import PropTypes from 'prop-types';
const uncovered = false;

export default function Card({animal, uncovered}){
    const elephant = new Animal('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40);
    const front = (
        <div className='card'></div>
    );
    const back = <div className='card back' />;
        if(uncovered){
            return front;
        }
            else{
                return back
            }
        
    return (
        <div className='card'>
            <h1>{elephant.name}</h1>
            <img alt={animal.image} height='200' width='200'  src={`${process.env.PUBLIC_URL}/placeholder.png`} />
            <table>
                <tbody>
                    {Object.keys(Animal.properties).map(property =>{
                        const animalProperty = Animal.properties[property];
                        return (
                            <tr key={property}>
                                <td>{animalProperty.label}</td>
                                <td>{animal[property]}&nbsp;
                                    {animalProperty.unit}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
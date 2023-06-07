// Write your Character component here
import React  from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Character = (props) => {

    
return (
    
    <div>Character Name: {props.character.name}
        <p>Birth year: {props.character.birth_year}</p>
        <p>Created: {props.character.created}</p>
        <p>Edited: {props.character.edited}</p>
        <p>Eye color: {props.character.eye_color}</p>
        <p>Films: {props.character.films}</p>
        <p>Gender: {props.character.gender}</p>
        <p>Hair color: {props.character.hair_color}</p>
        <p>Height: {props.character.height}</p>
        <p>Homeworld: {props.character.homeworld}</p>
        <p>Mass: {props.character.mass}</p>
        <p>Skin color: {props.character.skin_color}</p>
        <p>Species: {props.character.species}</p>
        <p>Starships: {props.character.starships}</p>
        <p>Vehicles: {props.character.vehicles}</p>
        </div>
        
)

}

export default Character

/* 
birth_year: "19BBY"
created: "2014-12-09T13:50:51.644000Z"
edited: "2014-12-20T21:17:56.891000Z"
eye_color: "blue"
films: 
(4) ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'Revenge of the Sith']
gender: "male"
hair_color: "blond"
height: "172"
homeworld: "http://swapi.dev/api/planets/1/"
mass: "77"
name: "Luke Skywalker"
skin_color: "fair"
species: 
[]
starships: 
(2) ['http://swapi.dev/api/starships/12/', 'http://swapi.dev/api/starships/22/']
url: "http://swapi.dev/api/people/1/"
vehicles: 
(2) ['http://swapi.dev/api/vehicles/14/', 'http://swapi.dev/api/vehicles/30/']
[[Prototype]]
: 

*/
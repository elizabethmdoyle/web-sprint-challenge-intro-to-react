// Write your Character component here
import React  from 'react'
import styled from 'styled-components'

const Character = (props) => {

    // const Card = styled(Card)`
    // max-width: 90%;
    // align-items: center;
    // margin: 0 auto;
    // border: 3px solid black;
    // color: black
    // font-size:`

return (


    
        <div>
                    <div>Character Name: {props.name}</div>
                    <p>Birth year: {props.birth_year}</p>
                    <p>Created: {props.created}</p>
                    <p>Edited: {props.edited}</p>
                    <p>Eye color: {props.eye_color}</p>
                    <p>Films: {props.films}</p>
                    <p>Gender: {props.gender}</p>
                    <p>Hair color: {props.hair_color}</p>
                    <p>Height: {props.height}</p>
                    <p>Homeworld: {props.homeworld}</p>
                    <p>Mass: {props.mass}</p>
                    <p>Skin color: {props.skin_color}</p>
                    <p>Species: {props.species}</p>
                    <p>Starships: {props.starships}</p>
                    <p>Vehicles: {props.vehicles}</p>
                    <p>URL: {props.url}</p>

</div>

)}

        
    


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
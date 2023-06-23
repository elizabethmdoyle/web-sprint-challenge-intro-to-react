// Write your Character component here
import React  from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Character = (props) => {

    console.log(props)

    console.log(props.people)
    
    props.people.map((people) => {
        return console.log(people)
    })



return (


    
    <div>
        {

     props.people.name.map(character => {

        return (<div>Character: {character}</div>)
   })
    
    
    // props.people.map((people) => {

    //              return console.log(people)
    //         })
        
                    // <div>Character Name: {props.people.name}</div>
                    // <p>Birth year: {props.people.birth_year}</p>
                    // <p>Created: {props.people.created}</p>
                    // <p>Edited: {props.people.edited}</p>
                    // <p>Eye color: {props.people.eye_color}</p>
                    // <p>Films: {props.people.films}</p>
                    // <p>Gender: {props.people.gender}</p>
                    // <p>Hair color: {props.people.hair_color}</p>
                    // <p>Height: {props.people.height}</p>
                    // <p>Homeworld: {props.people.homeworld}</p>
                    // <p>Mass: {props.people.mass}</p>
                    // <p>Skin color: {props.people.skin_color}</p>
                    // <p>Species: {props.people.species}</p>
                    // <p>Starships: {props.people.starships}</p>
                    // <p>Vehicles: {props.people.vehicles}</p>


        }
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
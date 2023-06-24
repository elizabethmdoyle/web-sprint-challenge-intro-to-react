import React from 'react';
import styled from 'styled-components'

import Character from './Character'

const Map = (props) => {


console.log(props)

return (
    <div>
        { Array.from(props.people).map((i, cb) => {
              let personname = i['name'];
              let birth_year = i['birth_year'];
              let created = i['created'];
              let edited = i['edited'];
              let eye_color = i['eye_color'];
              let films = i['films']
              let gender = i['gender']
              let hair_color = i['hair_color']
              let height = i['height']
              let homeworld = i['homeworld']
              let mass = i['mass']
              let skin_color = i['skin_color']
              let species = i['species']
              let starships = i['starships']
              let vehicles = i['vehicles']
              let url = i['url']
 


return <Character 
            key={personname}
            birth_year={birth_year}
            created={created}
            edited={edited}
            eye_color={eye_color}
            films={films}
            gender={gender}
            hair_color={hair_color}
            height={height}
            homeworld={homeworld}
            mass={mass}
            skin_color={skin_color}
            species={species}
            starships={starships}
            vehicles={vehicles}
            url={url}

/>;
})}

</div>

)
}






export default Map
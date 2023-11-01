import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import { FormControlLabel, Switch } from '@mui/material';
import { Link } from 'react-router-dom';



export default function MediaCard({url, filter, type}) {
  
  const [pokemon, setPokemon] = React.useState({})
  const [captured, setCaptured] = React.useState(false)
  const colors = {
    grass: '#78c850',
    fire: '#F08030',
    poison: 'purple',
    normal: '#A8A878',
    flying: '#a890f0',
    water: '#6890f0',
    steel: '#b8b8d0',
    fairy: '#ee99ac',
    dark: '#705848',
    ice: '#98d8d8',
    eletric: '#f8d030',
    ground: '#e0c068',
    ghost: '#705898',
    fighting: '#c03028',
    bug: '#a8b820',
    rock: '#b8a038',
    dragon: '#7038f8',
    unknown: '#68a090',
    psychic: '#da4d77',
  }

  const handleChange = () =>{
    setCaptured((prevState)=> !prevState)
  }

  React.useEffect(()=>{
    
    axios.get(url).then((res) => {
      setPokemon(res?.data)
      
    })
  },[])

  if(typeof filter === 'boolean' && filter !== captured ){
    return null
  }

  const checkType = () => {
    const types = pokemon.types
    const result = types.some((poketype) => {
      return poketype.type.name === type.toLowerCase()
    })
    return result
  }

  if(type.length > 0 && !checkType()){
    return null
  }


  return (
    <div key={pokemon?.id}>
    

    <Card style={{ padding: 45, margin: 7}} sx={{ maxWidth: 345, display: 'flex'}} >
        <Typography align='center' variant="h5" component="div">
          {pokemon?.id}
        </Typography>
        <Link to='/pokemon' state={{ pokemon: {pokemon} }}>
{ pokemon?.sprites?.front_default ?
   (<CardMedia
        style={{margin: '0 auto'}}
        sx={{ height: 150, width: 170 }}
        image={pokemon?.sprites?.front_default}
        title={pokemon?.name}

      />) : <div>Carregando</div>}
          </Link>
      <CardContent align='center'  >
        
        <Typography align='center' variant="h5" component="div">
          {pokemon?.name}
        </Typography>
        <div style={{height: 55}}>
       {pokemon?.types && pokemon.types.map(({type},key) => (
        <Typography align='center' variant="p" component="div" style={{backgroundColor: colors[type.name], color: 'white', borderRadius: '14px', width: 70, height: 20, padding: 3, marginBottom: 2}} key={key}>
        {type.name}
      </Typography>
       ))}
               </div>
          <FormControlLabel  control={<Switch checked={captured} onChange={handleChange} value={''}/>}  label="Captured" ></FormControlLabel>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>

    </div>
  );
}

import React, { useState } from "react"

import { Link, useLocation } from "react-router-dom"
import { AppBar, Box, Card, CardMedia,Toolbar, Typography } from "@mui/material"


export const Pokemon = ({url}) => {
  const {state} = useLocation()
  console.log(state)

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

  return(
    <div className="container">
     <Box >
      <AppBar style={{alignItems: 'center'}} >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{alignItems: 'center'}}
          >
            <Link 
            style={{textDecoration: 'none', color: 'white'}}
            to='/'>
             Pokedex
            </Link>
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>

    <Card style={{ padding: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 60}} sx={{ maxWidth: 345}}>
    <CardMedia
    style={{margin: '0 auto',}}
    sx={{ height: 170, width: 230}}
    image={state.pokemon.pokemon.sprites?.front_default}
    title={state.pokemon.pokemon.name}
  />
        <Typography align='center' variant="h5" component="div" style={{display: 'flex', alignContent: 'start'}}>
          {state.pokemon.pokemon.name}
        </Typography>
        {state.pokemon.pokemon?.types && state.pokemon.pokemon.types.map(({type}, key) => (
        <Typography key={key} align='center' variant="p" component="div" style={{backgroundColor: colors[type.name], color: 'white', borderRadius: '14px', width: 70, height: 20,  padding: 3, marginBottom: 2}}>
        {type.name}
      </Typography>

       ))}
          <Typography >
          Altura: {state.pokemon.pokemon.height / 10} metro
          </Typography>
          <Typography>
          Peso: {state.pokemon.pokemon.weight / 10} kg
          </Typography>
  </Card>
  </div>

  )

}
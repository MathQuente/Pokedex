import React, { useEffect, useState } from "react";
import MediaCard from "../../components/Cards/Card";
import { AppBar, Box, Container, Grid, IconButton, Menu, MenuItem, TextField, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import './Home.css'
import { Link } from "react-router-dom";


export const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [filter, setFilter] = useState('')
  const [filterType, setFilterType] = useState('')
  const [types, setTypes] = useState([])

  const handleFilterChange = (e) =>{
    setFilter(e.target.value)
  }


  const handleFilterTypeChange = (e) =>{
    setFilterType(e.target.value)
    
  }

  useEffect(() =>{
    getPokemon()
    getTypes()
  },[])

  const getPokemon = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50').then((res) => setPokemons(res?.data?.results) )
    
  }

  const getTypes = () => {
    axios.get('https://pokeapi.co/api/v2/type').then((res) => setTypes(res?.data?.results))
  }  

  return(
    <div className="container">
      <Box >
        <AppBar 
          style={{alignItems: 'center'}} >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
            >
              <Link 
              style={{textDecoration: 'none', color: 'white'}} 
              to='/'
              >
             Pokedex
              </Link>

            </Typography>

          </Toolbar>
        </AppBar>
    </Box>
    <div className="header">
      <Box width='250px'>
        <TextField
          label='Type' 
          select 
          value={filterType}
          onChange={handleFilterTypeChange}
          fullWidth >
            <MenuItem 
              value=''
              >
                Any
            </MenuItem>
              {types.map((type,key) => {
                return <MenuItem 
                key={key} 
                value={type.name}>
                  {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                </MenuItem>})}
          </TextField>
      </Box>
      <Box 
      width='250px'>
        <TextField
          label='Captured' 
          select 
          value={filter}
          onChange={handleFilterChange}
          fullWidth 
        >
          <MenuItem 
          value=''>
            Any
          </MenuItem>
          <MenuItem 
          value={true}>
            Yes
          </MenuItem>
          <MenuItem
           value={false}>
            No
          </MenuItem>
        </TextField>
    </Box>
    </div>
      <Container 
      maxWidth='false'
      >
        <Grid 
        container  
        spacing={1} marginTop={2}>
            {pokemons.map((pokemon, key) => 
              <MediaCard url={pokemon.url} filter={filter} type={filterType} key={key}/>
              )}
              
        </Grid>
      </Container>
    </div>
  )
}
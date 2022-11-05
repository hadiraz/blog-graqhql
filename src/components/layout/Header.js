import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position='sticky'>
        <Container maxWidth="lg">
        <Toolbar sx={{padding : 0}}>
          <Link to="/" style={{display:'flex' , flex:1 , textDecoration:'none' , color:'white'}}>
            <Typography component="div" variant='h5' fontWeight="600" flex={1}>
                وبلاگ سایت
            </Typography>
          </Link>
            <IconButton
            size='large'
            edge='start'
            aria-label='menu'
            color='inherit'
            >
                <BookIcon/>
            </IconButton>
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header
import { Container, Grid } from '@mui/material'
import React from 'react'
import AuthorsList from './Blogs/AuthorsList'
import HomeBlogs from './Blogs/HomeBlogs'

function Home() {
  return (
        <Container component="main" sx={{marginBottom:4}}>
            <Grid container sx={{marginTop:4}}>
                <Grid item xs={12} md={3}>
                    <AuthorsList/>
                </Grid>
                <Grid item xs={12} md={9}>
                    <HomeBlogs/>
                </Grid>
            </Grid>
        </Container>
  )
}

export default Home
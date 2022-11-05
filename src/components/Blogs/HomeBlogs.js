import { useLazyQuery, useQuery } from '@apollo/client'
import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { GET_BLOGS_INFO } from '../../graphql/queries'
import CardEL from '../shared/CardEL'
import Loading from '../shared/Loading'

function HomeBlogs() {
    const {loading , errors , data} = useQuery(GET_BLOGS_INFO);
    console.log(data , errors , loading)
    
  return (
    <Container sx={{padding:0}}>
        <Typography component="h3" variant='h6' fontWeight={600}  mb={2}>
            مقالات
        </Typography>
        {
          loading && <Loading/>
        }
        {
          errors && "something went wrong! please try again later"
        }
        {
          data && <Grid container spacing={2}>
            {data.contents.map(value => {
            return (
              <Grid key={value.id} item xs={12} sm={6} md={4}>
                  <CardEL data={value} ></CardEL>
              </Grid>
            )
          })
        }
          </Grid>
        }
    </Container>
  )
}

export default HomeBlogs
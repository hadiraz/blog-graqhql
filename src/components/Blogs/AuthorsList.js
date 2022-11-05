import { useQuery } from '@apollo/client'
import { Avatar, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { GET_AUTHORS } from '../../graphql/queries'
import Loading from '../shared/Loading'

function AuthorsList() {
  const {loading , errors , data} = useQuery(GET_AUTHORS);

  return (
  <Container sx={{padding:'0 !important'}}>
    <Typography component="h3" variant='h6' fontWeight={600} mb={2}>
        نویسندگان
    </Typography>
    {data && <Grid container  xs={12}  sx={{boxShadow : "rgba(0,0,0,0.1)  0px  4px 12px" , borderRadius:4 , padding:2 }}>
      {
        data?.authors.map((value , key)=>{
          return (
          <React.Fragment key={value.id}>
            <Grid item sx={12} >
              <div style={{display:'flex' , width:'100%' , alignItems:'center'}}>
                <Link to={`/authors/${value.slug}`} style={{display:'flex' , alignItems:'center' , textDecoration:'none' , width:'100%'}}>
                <Avatar
                variant='img'
                src={value.image.url}
                sx={{marginRight:1}}
                />
                <Typography component='p' variant='p' color='text.secondary' fontWeight='700' sx={{fontSize:'0.9rem'}}>
                  {value.name}
                </Typography>
                </Link>
              </div>
              </Grid>
              <Grid item xs={12}>
                {
                  data.length < key-1 && <Divider variant='middle' sx={{marginTop:2}}/>
                }
            </Grid>
          </React.Fragment>
           )
        })
      }
      {
        errors && <p>something went wrong!</p>
      }
    </Grid>
}
      {
        loading && <Loading/>
      }
  </Container>
  )
}

export default AuthorsList
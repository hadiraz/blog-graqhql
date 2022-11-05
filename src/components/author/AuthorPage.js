import { useQuery } from '@apollo/client';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_AUTHOR } from '../../graphql/queries';
import Loading from "../shared/Loading"
import sanitizeHtml from 'sanitize-html';
import CardEL from '../shared/CardEL';
function AuthorPage() {
  const {authorId} = useParams() ;
  const {data , loading , errors} = useQuery(GET_AUTHOR , {variables : {
    slug : authorId
  }})
  console.log(data)
  return (
    <Container maxWidth='lg'>
      <Grid container mt={10}>
        {loading && <Loading/>}
        {data && <>
          <Grid item display='flex'
          flexDirection='column' alignItems='center' mb={7} xs={12}>
            <Avatar
              src={data.author.image.url}
              sx={{
                width : '250px' ,
                height : '250px' ,
                boxShadow : 'rgba(0,0,0,0.1)  0px  4px 12px'
              }}
            />
            <Typography component='h3' variant='h5' mt={3} fontWeight={700}>
              {data.author.name}
            </Typography>
            <Typography component='p' variant='h6' mt={1} textTransform='capitalize' color='text.secondary'>
              {data.author.career}
            </Typography>
          </Grid>
          <Grid xs={12} mb={6}>
            <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.author.description.html)}}>
              
            </div>
          </Grid>
          <Typography component='p' variant='h5' fontWeight={700} mt={2}>
            مقالات {data.author.name}
          </Typography>
          <Grid container xs={12} spacing={2} mt={2}>
              {
                data?.author.documentInStages[0].contents.map(value => {
                  return (
                    <Grid item xs={12} sm={6} md={4}>
                        <CardEL data={value} />
                    </Grid>
                  )
                })
              }
          </Grid>
          </>
        }
      </Grid>
    </Container>
  )
}

export default AuthorPage
import { useQuery } from '@apollo/client';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Avatar, Box, Container, Grid, Typography , Divider } from '@mui/material';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import sanitizeHtml from 'sanitize-html';
import { GET_BLOG_INFO, GET_COMMENTS } from '../../graphql/queries';
import CommentForm from '../comment/CommentForm';

function Comment({slug}) {
  const { data , loading , errors } = useQuery(GET_COMMENTS , {
    variables : {slug}
  })

  console.log(data)

  return (
    <>
      {
          data?.comments && data.comments.map(({id , description , name},key)=>{
          return <Grid xs={12} key={id} display='flex' alignItems='center' mt={2} mb={3}>
            <Avatar
            src={<p>7</p>}
            sx={{marginRight:3}}
            />
            <Box component='div' display='flex' flexDirection='column' justifyContent='space-between'>
              <Typography mb={1} component='p' variant='p' color='text.secondary' fontWeight={600}>
                {name}
              </Typography>
              <Typography component='p' variant='p'>
                {description}
              </Typography>
            </Box>
          </Grid>

        })
        }
</>
  )
}

export default Comment
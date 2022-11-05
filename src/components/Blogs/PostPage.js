import { useQuery } from '@apollo/client';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import sanitizeHtml from 'sanitize-html';
import { GET_BLOG_INFO, GET_COMMENTS } from '../../graphql/queries';
import CommentForm from '../comment/CommentForm';
import Comments from '../comment/Comments';
import Loading from '../shared/Loading';

function PostPage() {
  const { blogId } = useParams();
  const { data , loading , errors } = useQuery(GET_BLOG_INFO , {
    variables : {slug : blogId}
  })

  const navigate = useNavigate()
  console.log(data)

  return (
    <Container maxWidth='lg'>
      {
        loading && <Loading style={{marginTop:'20px'}} />
      }
      {
        data && <Grid container>
          <Grid xs={12} mt={9} item display='flex' alignItems='center' justifyContent='space-between'>
            <Typography component='h2' variant='h4' color='primary' fontWeight={700}>
              {data.content.title}
            </Typography>
            <ArrowBackRoundedIcon sx={{cursor:'pointer'}} onClick={()=>navigate(-1)} />
          </Grid>
          <Grid display='flex' justifyContent='center' item xs={12} mt={6}>
            <img src={data.content.coverImage.url} style={{maxWidth:'100%' , maxHeight:'500px' , borderRadius:'15px'}} alt={data.content.slug}/>
          </Grid>
          <Grid item xs={12} mt={7} display='flex' alignItems='center'>
            <Avatar
            src={data.content.author.image.url}
            sx={{width:'80px' , height:'80px' , marginRight:2}}
            />
            <Box component='div'>
              <Typography component='p' variant='h5' fontWeight={700}>
                {data.content.author.name}
              </Typography>
              <Typography component='p' variant='h6' fontWeight={500} color='text.secondary'>
                {data.content.author.career}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mt={4}>
            <div dangerouslySetInnerHTML={{__html:sanitizeHtml(data.content.description.html)}}>

            </div>
          </Grid>
          <CommentForm slug={blogId} />
          <Grid xs={12} item>
            <Typography component='p' variant='h6' color='primary' fontWeight={700} mt={5}>
              نظرات کاربران
            </Typography>
          </Grid>
          <Grid item xs={12} mt={4} sx={{
        boxShadow : "rgba(0,0,0,0.1)  0px  4px 12px" , 
        borderRadius : '8px' ,
        px : 2 ,
        mt : 5
        }}>
            <Comments slug={blogId}/>
          </Grid>
        </Grid>
      }
    </Container>
  )
}

export default PostPage
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

function CardEL({data}) {
  const {author = '' , title , coverImage , slug} = data ;
  return (
    <Card sx={{boxShadow : "rgba(0,0,0,0.1)  0px  4px 12px" , borderRadius:4}}>
      {
        author && <CardHeader
      avatar={<Avatar src={author.image.url} sx={{marginLeft:1}} />}
      title={<Typography variant='p' component='p' color='text.primary' fontSize='0.9rem' fontWeight={700}>{author.name}</Typography>}
      />
      }
      

      <CardMedia component='img' height='194' image={coverImage.url} alt={title}>

      </CardMedia>

      <CardContent>
        <Typography component='h3' variant='h6' color='text.primary' fontWeight={600}>
          {title}
        </Typography>
      </CardContent>
        <Divider variant='middle' sx={{margin:'10px'}}/>
      <CardActions>
        <Link to={`/blogs/${slug}`} style={{width:'100%' , textDecoration:'none'}}>
          <Button variant='outlined' size='small' sx={{width:'100%' , borderRadius:3}}>
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default CardEL
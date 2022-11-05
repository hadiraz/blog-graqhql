import { Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <footer style={{marginTop:'1.5rem'}}>
      <Typography component='p' variant='p' bgcolor='#f7f7f7' color='primary' padding={2} textAlign="center">
        ساخته شده توسط محمد هادی رضیعی | graphql
      </Typography>
    </footer>
  )
}

export default Footer
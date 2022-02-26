import { Container, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './styles';
import Carousel from './Carousel';

const Banner = () => {

  const classes = useStyles();
  return (
    <div className = {classes.banner}>
      <Container className = {classes.bannerContent}>
        <div className = {classes.tagline}>
          <Typography
            variant = 'h2'
            style = {{
              fontWeight: 'bold',
              marginBottom: 15,
              fontFamily: 'Montserrat',
            }}
          >
              Crypto Tracker
          </Typography>
          <Typography
            variant = 'subtitle2'
            style = {{
              color: 'darkgrey',
              textTransform: 'capitalize',
              fontFamily: 'Montserrat'
            }}
          >
            Track your favourite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  )
}

export default Banner

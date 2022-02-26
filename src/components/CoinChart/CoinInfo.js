import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../store/Context';
import { SingleCoin } from '../../config/api';
import useStyles from './styles';
import CoinChart from './CoinChart';
import { LinearProgress, Typography } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser'

const CoinInfo = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();

    const {currency, symbol} = useContext(AppContext);

    const classes = useStyles();

    const fetchCoin = async() => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
    };

    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        fetchCoin();
    }, []);

  if (!coin) return <LinearProgress style = {{color: 'gold'}} />

  return (
    <div className = {classes.container}>
      <div className = {classes.sidebar}>
        <img 
          src = {coin?.image.large}
          alt = {coin?.name}
          height = '200'
          style = {{marginBottom: 20}}
        />
        <Typography 
        variant = 'h3'
        className = {classes.heading}
        >
          {coin?.name}
        </Typography>
        <Typography
          variant = 'subtitle1'
          className = {classes.description}
        >
          {ReactHtmlParser(coin?.description.en.split('. ')[0])}.
        </Typography>
        <div className = {classes.coinData}>
          <Typography 
          variant = 'h5'
          className = {classes.heading}
          >
            Rank:
            &nbsp;
            &nbsp;
            <span
              style = {{
                fontWeight: 'normal'
              }}
            >
              {coin?.market_cap_rank}
            </span>
          </Typography>
          <Typography 
          variant = 'h5'
          className = {classes.heading}
          >
            Current Price:
            &nbsp;
            &nbsp;
            <span
              style = {{
                fontWeight: 'normal'
              }}
            >
              {symbol}{' '}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </span>
          </Typography>
          <Typography 
          variant = 'h5'
          className = {classes.heading}
          >
            Market Cap:
            &nbsp;
            &nbsp;
            <span
              style = {{
                fontWeight: 'normal'
              }}
            >
              {symbol}{' '}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0,-6)
              )}
              M
            </span>
          </Typography>
        </div>
      </div>
      <CoinChart coin = {coin} />
    </div>
  )
}

export default CoinInfo

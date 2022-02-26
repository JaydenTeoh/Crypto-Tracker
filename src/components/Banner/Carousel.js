import { Link } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { TrendingCoins } from '../../config/api';
import { AppContext } from '../../store/Context';
import useStyles from './styles';

const Carousel = () => {
    const [trending, setTrending] = useState([]);

    const classes = useStyles();
    const {currency,symbol} = useContext(AppContext);

    const fetchTrendingCoins = async() => {
        const {data} = await axios.get(TrendingCoins(currency));
        setTrending(data);
    };

    console.log(trending);

    useEffect(() => {
        fetchTrendingCoins();
    }, [currency]);

    

    const items = trending.map((coin) => {
        let profit = coin.price_change_percentage_24h >= 0;

        return (
            <Link
                className = {classes.carouselItem}
                to = {`/coins/${coin.id}`}
            >
                <img 
                    src = {coin.image}
                    alt = {coin.name}
                    height = '80'
                    style = {{
                        marginBottom: 10,
                    }}
                />
                <span>
                    {coin.symbol}
                    &nbsp;
                    <span
                        style = {{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                        }}
                    >
                        {profit && "+"}
                        {coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                </span>
                <span
                    style = {{
                        fontSize: 22,
                        fontWeight: 500
                    }}
                >
                    {symbol}{coin.current_price.toFixed(2)}
                </span>
            </Link>
        )
    })

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };
  return (
    <div className = {classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
      />
    </div>
  )
}

export default Carousel

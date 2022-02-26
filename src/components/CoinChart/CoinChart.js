import { CircularProgress, createTheme, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js';

import { HistoricalChart } from '../../config/api';
import { AppContext } from '../../store/Context';
import useStyles from './styles';
import SelectButton from './SelectButton';

const CoinChart = ({coin}) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );
  
    const chartDays = [
      {
        label: "24 Hours",
        value: 1,
      },
      {
        label: "30 Days",
        value: 30,
      },
      {
        label: "3 Months",
        value: 90,
      },
      {
        label: "1 Year",
        value: 365,
      },
    ];

  const [chartData, setChartData] = useState();
  const [days, setDays] = useState(1);

  const {currency} = useContext(AppContext);
  const classes = useStyles();

  const fetchCoinChart = async() => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

    setChartData(data.prices);
  };

  useEffect(() => {
    fetchCoinChart();
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        type: 'dark',
    },
  });
  return (
    <ThemeProvider theme = {darkTheme}>
      <div className = {classes.chartContainer}>
        {!chartData ? (
          <CircularProgress 
            style = {{ color: 'gold' }}
            size = {250}
            thickness = {1}
          />
        ) : (
          <>
            <Line 
              data = {{
                labels: chartData.map((data) => {
                  let date = new Date(data[0]);
                  let time = 
                    date.getHours() > 12 
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                      return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [{
                  data: chartData.map((data) => data[1]),
                  label: `Price (Past ${days} Days) in ${currency}`,
                  borderColor: "#EEBC1D",
                }]
              }}
              options = {{
                elements: {
                  point: {
                    radius: 1
                  }
                }
              }}
            />
            <div
              style = {{
                display: 'flex',
                marginTop: 20,
                justifyContent: 'space-around',
                width: '100%'
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key = {day.value}
                  onClick = {() => setDays(day.value)}
                  selected = {day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  )
}

export default CoinChart

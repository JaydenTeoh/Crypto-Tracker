import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../store/Context';
import useStyles from './styles';

const Header = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark',
        },
    });

    const {currency, setCurrency} = useContext(AppContext);
    console.log(currency);
  return (
    <ThemeProvider theme = {darkTheme}>
        <AppBar color = 'transparent' position = 'static'>
            <Container>
                <Toolbar>
                    <Typography 
                        className = {classes.title} 
                        onClick = {() => navigate('/')}
                        variant = 'h6'
                    >
                        Crypto Tracker
                    </Typography>

                    <Select
                        variant = 'outlined'
                        style = {{
                            width: 100,
                            height: 40,
                            marginRight: 15,
                        }}
                        value= {currency}
                        onChange = {(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value = {'USD'}>USD</MenuItem>
                        <MenuItem value = {'SGD'}>SGD</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
    
  )
}

export default Header

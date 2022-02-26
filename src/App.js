import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
import { Provider } from './store/Context';

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useStyles from './styles';



const App = () => {

    const classes = useStyles();
    return(
        
           <BrowserRouter>
           <Provider>
                <div className = {classes.App}>
                    <Header />
                    <Routes>
                        <Route path = '/' element = {<HomePage />} />
                        <Route path = '/coins/:id' element = {<CoinPage />} />
                    </Routes>
                    
                </div>
            </Provider>    
            </BrowserRouter> 
        
    )
}

export default App;
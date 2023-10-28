// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsFeed from './components/NewsFeed';
import StockTicker from './components/StockTicker';
import Logo from './imgs/logo.svg';

function App() {
    const [data, setData] = useState({ newsFeed: [], stockData: [] });

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://good-morning-news.p.rapidapi.com/scrape',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                    'X-RapidAPI-Host': 'good-morning-news.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="App">
            <header>
              <img src={Logo} alt='logo' />
              <h1>Good Morning News</h1>
              <button>connect</button>
            </header>
            <NewsFeed news={data.newsFeed} />
            <StockTicker stocks={data.stockData} />
        </div>
    );
}

export default App;

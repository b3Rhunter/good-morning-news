// components/StockTicker.js
import React from 'react';

const StockTicker = ({ stocks }) => {
    const allStocks = [...stocks, ...stocks];
    return (
        <div className="stock-ticker">
            <div className="stock-ticker-content">
                {allStocks.map((stock, index) => (
                    <div key={index} className="stock-item">
                        <span className="stock-symbol">{stock.symbol}</span>
                        <span className="stock-price">{stock.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StockTicker;

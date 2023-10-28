// components/StockTicker.js
import React from 'react';

const StockTicker = ({ stocks }) => {
    return (
        <div className="stock-ticker">
            {stocks.map((stock, index) => (
                <div key={index} className="stock-item">
                    <span className="stock-symbol">{stock.symbol}</span>
                    <span className="stock-price">{stock.price}</span>
                </div>
            ))}
        </div>
    );
}

export default StockTicker;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import Stock from './components/stock/Stock.js';
import News from './components/stocknews/News.js';
import Screener from './components/screener/Screener.js';
import Crypto from './components/crypto/Crypto.js';
import StockChart from './components/stockchart/StockChart.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="page">
          <Routes>
            {/* Home Page */}
            <Route 
              path="/" 
              element={<Home />}
            />
            {/* Charts Page */}
            {/* <Route 
              path="/chart" 
              element={<StockChart />}
            /> */}
            {/* Screener Page */}
            <Route 
              path="/screener" 
              element={<Screener />}
            />
            {/* Crypto Page */}
            <Route 
              path="/crypto" 
              element={<Crypto />}
            />
            {/* News Page */}

            {/* Stock Summary Page */}
            <Route 
              path="/stocks/:symbol" 
              element={<Stock />}
            />
            {/* Stock Chart Page */}
            <Route
              path="/stocks/:symbol/chart"
              element={<StockChart />}
            />
            {/* Stock News Page */}
            <Route
              path="/stocks/:symbol/news"
              element={<News />}
            />
            <Route 
              path="*"
              element={<Home />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

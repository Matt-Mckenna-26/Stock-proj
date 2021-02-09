import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import react, {useState, useEffect} from 'react'
import axios from 'axios';
import JumboTron from './components/JumboTron';
import NaviHeader from './components/NaviHeader';
import NewsCarousel from './components/NewsCarousel';
import TrendingStonks from './components/TrendingStonks';
import MajorIndicesCaro from './components/MajorIndicesCaro';
import StockDetail from './components/StockDetail';

const App = () => {
  const [ticker, setTicker] = useState('By ticker ex."tsla =tesla"');
  const [searched, setSearched] = useState(false);
  const [detailedStock, setDetailedStock] = useState({});
  const [detailedStockLoaded, setDetailedStockLoaded ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8000/api/stock/${ticker}`)
    .then(res => { 
      console.log(res.data)
      setDetailedStock(res.data)
    }).catch(err => console.log({err}))
    setSearched(true)
    setDetailedStockLoaded(true);
}

  return (
    <div className="App pb-5">
        <NaviHeader ticker={ticker}  setTicker={setTicker} handleSubmit={handleSubmit} setSearch={setSearched}/>
        <JumboTron searched={searched}/>
        <StockDetail searched={searched} detailedStock={detailedStock} setDetailedStock={setDetailedStock} 
        handleSubmit={handleSubmit} setTicker={setTicker} ticker={ticker}/>
        <MajorIndicesCaro/>
        <NewsCarousel />
        <TrendingStonks/>
    </div>
  );
}

export default App;

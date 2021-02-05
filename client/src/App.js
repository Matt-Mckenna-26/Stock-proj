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
  const [ticker, setTicker] = useState({});
  const [searched, setSearched] = useState(false);
  const [detailedStock, setDetailedStock] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8000/api/stock/${ticker}`)
    .then(res => { 
      console.log(res.data)
      setDetailedStock(res.data)
    }).catch(err => console.log({err}))
    setSearched(true)
}

  return (
    <div className="App">
        <NaviHeader ticker={ticker}  setTicker={setTicker} handleSubmit={handleSubmit} setSearch={setSearched}/>
        <StockDetail searched={searched} detailedStock={detailedStock} setDetailedStock={setDetailedStock}/>
        <JumboTron searched={searched}/>
        <MajorIndicesCaro/>
        <NewsCarousel />
        <TrendingStonks/>
    </div>
  );
}

export default App;

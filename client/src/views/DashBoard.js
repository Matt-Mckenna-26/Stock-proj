import react, {useState, useEffect} from 'react'
import axios from 'axios';
import JumboTron from '../components/JumboTron';
import NewsCarousel from '../components/NewsCarousel';
import TrendingStonks from '../components/TrendingStonks';
import MajorIndicesCaro from '../components/MajorIndicesCaro';
import StockDetail from '../components/StockDetail';
import UserWatchList from '../components/UserWatchList';

const DashBoard = ({searched, detailedStock, setDetailedStock, handleSubmit, setTicker, ticker, isSomeoneLoggedIn, loggedInUser}) => {
    

    return (
        <div>
            {isSomeoneLoggedIn !== false ? <UserWatchList loggedInUser={loggedInUser}/> : <JumboTron searched={searched}/>}
            {/* <StockDetail searched={searched} detailedStock={detailedStock} setDetailedStock={setDetailedStock} 
            handleSubmit={handleSubmit} setTicker={setTicker} ticker={ticker}/> */}
            {/* <MajorIndicesCaro/>
            <NewsCarousel />
            <TrendingStonks/> */}
        </div>
    );
}

export default DashBoard;

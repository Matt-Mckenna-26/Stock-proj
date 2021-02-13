import React from 'react'
import axios from 'axios';
import JumboTron from '../components/JumboTron';
import NewsCarousel from '../components/NewsCarousel';
import TrendingStonks from '../components/TrendingStonks';
import MajorIndicesCaro from '../components/MajorIndicesCaro';
import StockDetail from '../components/StockDetail';
import UserWatchList from '../components/UserWatchList';

const DashBoard = ({searched, detailedStock, setDetailedStock, handleSubmit, setTicker, ticker, isSomeoneLoggedIn, loggedInUser, setLoggedinUser, loaded}) => {
    const addToWatchList = (e, tickerSymbol) => {
        e.preventDefault();
        const newTicker =  tickerSymbol;
        console.log(newTicker)
        axios.put(`/api/addStockToWatchList/${loggedInUser._id}`, {ticker: newTicker}, 
            {
            withCredentials: true
            }
        ).then (res => {
            console.log(res)
            setLoggedinUser(res.data.newWatchList)
        })
                .catch(err => console.log(err))
        .catch( err => {
            console.log({err});
        })
    }

    return (
        <div>
            {isSomeoneLoggedIn !== false ? <UserWatchList loggedInUser={loggedInUser} setLoggedinUser={setLoggedinUser}/> : <JumboTron searched={searched}/>}
            <StockDetail searched={searched} detailedStock={detailedStock} setDetailedStock={setDetailedStock} isSomeoneLoggedIn={isSomeoneLoggedIn}
            handleSubmit={handleSubmit} setTicker={setTicker} ticker={ticker} loaded={loaded} addToWatchList={addToWatchList}/>
            <MajorIndicesCaro/>
            <NewsCarousel />
            <TrendingStonks/>
        </div>
    );
}

export default DashBoard;

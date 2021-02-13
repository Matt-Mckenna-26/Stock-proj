import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import Logo from '../images/MoonViewsLogo.png'
import Spinner from 'react-bootstrap/Spinner'

const UserWatchList = ({loggedInUser, setLoggedinUser}) => {
    const [focusStockStats, setFocusStockStats] = useState([]);
    const [userWatchListLoaded, setUserWatchListLoaded] = useState(false)
    const [focus, setFocused] = useState(false)

    const handleGetRequest = (thisTicker) => {
        setUserWatchListLoaded(false);
        setFocused(true);
        axios.get(`/api/stock/${thisTicker}`)
            .then(res => { 
                console.log(res.data);
                setFocusStockStats(res.data);
                setUserWatchListLoaded(true);
            })
            .catch(err => console.log({err}))
    }
    const removeFromWatchlist = (e, tickerSymbol) => {
        e.preventDefault();
        const  tickerToDelete = tickerSymbol;
        axios.put(`http://localhost:8000/api/removeStockWatchList/${loggedInUser._id}`, {ticker: tickerToDelete}, 
            {
            withCredentials: true
            }
        ).then (res => {
            console.log(res)
            setLoggedinUser(res.data.newWatchList)
            setFocused(false);
        })
                .catch(err => console.log(err))
        .catch( err => {
            console.log({err});
        })
    }




    return (
        <div>
            <Badge pill variant='light' className='d-block my-5 text-primary mx-auto text-center' style={{height:'3rem', width: '35rem'}}>
                <h2>Your Watchlist</h2>
            </Badge>
                    {loggedInUser.tickersTracked.map((tickers, idx) => (
                            <Button variant="outline-light" className='btn-lg px-5' 
                            key ={idx} onClick={(e) => handleGetRequest(tickers.ticker)}>{tickers.ticker}</Button>
                    ))}
                <Card className = 'col-10 mx-auto m-5 p-2'>
                    {focus === false ? 
                        <Card>
                            <Card.Title className='text-primary'><h1>Welcome back to MoonViews, {loggedInUser.username}!</h1></Card.Title>
                                <img src={Logo} alt='MoonViews logo' style={{width:'18rem'}} className='mx-auto'/>
                                <Card.Body>
                                    <Card.Text>
                                        <h3 className='text-primary'>
                                            Were happy to have you! <br/>
                                            Lets get you caught up on your tracked stocks.<br/>
                                            Click on the desired ticker above to catch up.<br/>
                                            Or Search below to find another stock to add to your list.
                                        </h3>
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    : 
                    (userWatchListLoaded === false ?
                        (
                        <>
                            <h2 className='text-primary mx-auto'>Loading...</h2>
                            <Spinner animation="border" variant="primary" className='mx-auto' size='xl'/>
                        </>        
                        ) : 
                        <Card className="text-center mx-auto my-4" style={{width:'85%'}}>
                        <Card.Header className = {`${focusStockStats.price.regularMarketChange.raw > 0 ? 'bg-success text-light' : 'bg-danger text-light'}`}>
                            <h3>{focusStockStats.price.shortName}</h3>
                            {focusStockStats.price.quoteType !== "ETF" ? <a className= 'mt-3 text-light' href={`${focusStockStats.summaryProfile.website}`} target='blank'>Website</a>: null}
                            {focusStockStats.price.quoteType !== "ETF" ? <p><span className='font-weight-bold d-inline-block text-light mb-0'>Industry: </span>  {focusStockStats.summaryProfile.industry}</p>: null}
                            <p><span className='font-weight-bold d-inline-block text-light mb-0'>Symbol: </span>  {focusStockStats.price.symbol}</p>
                            <p><span className='font-weight-bold d-inline-block  text-light mb-0'>Exchange: </span>  {focusStockStats.price.exchangeName}</p>
                        </Card.Header>
                        <Card.Body className = {`${focusStockStats.price.regularMarketChange.raw > 0 ? ' border border-success' : ' border border-danger'}`}>
                                <Card.Title className = {`${focusStockStats.price.regularMarketChange.raw > 0 ? 'text-success' : 'text-danger'}`}>{focusStockStats.price.symbol} Stock Information at this Moment</Card.Title>
                                <Card.Text className='my-2 py-3'>
                                    <div className='mx-3' style ={{display:"inline-block"}}>
                                        <ul className='list-unstyled'>
                                            <li><span className='font-weight-bold'>Current Price:</span> ${focusStockStats.price.regularMarketPrice.fmt}</li>
                                            <li className = {`${focusStockStats.price.regularMarketChange.raw > 0 ? 'text-success' : 'text-danger'}`}><span className='font-weight-bold'>Price Change:</span> ${focusStockStats.price.regularMarketChange.fmt}</li>
                                            <li className = {`${focusStockStats.price.regularMarketChange.raw > 0 ? 'text-success' : 'text-danger'}`}><span className='font-weight-bold'>% Change:</span> {focusStockStats.price.regularMarketChangePercent.fmt}</li>
                                            <li><span className='font-weight-bold'>Market Open:</span> ${focusStockStats.price.regularMarketOpen.fmt}</li>
                                            <li><span className='font-weight-bold'>Previous Close:</span> ${focusStockStats.price.regularMarketPreviousClose.fmt}</li>
                                        </ul>
                                    </div>
                                    <div className='mx-3 ' style ={{display:"inline-block"}}>
                                        <ul className='list-unstyled'>
                                            <li><span className='font-weight-bold'>Todays High:</span> ${focusStockStats.price.regularMarketDayHigh.fmt}</li>
                                            <li><span className='font-weight-bold'>Todays Low:</span> ${focusStockStats.price.regularMarketDayLow.fmt}</li>
                                            <li><span className='font-weight-bold'>Todays Volume:</span> {focusStockStats.price.regularMarketVolume.fmt}</li>
                                            <li><span className='font-weight-bold'>Average Volume:</span> ${focusStockStats.price.averageDailyVolume3Month.fmt}</li>
                                            <li><span className='font-weight-bold'>Market Cap:</span> ${focusStockStats.price.marketCap.fmt}</li>
                                        </ul>
                                    </div>
                                    <div className='mx-3 align-top' style ={{display:"inline-block"}}>
                                        <ul className='list-unstyled'>
                                            <li><span className='font-weight-bold'>50 day Avg:</span> ${focusStockStats.summaryDetail.fiftyDayAverage.fmt}</li>
                                            <li><span className='font-weight-bold'>Year High:</span> ${focusStockStats.summaryDetail.fiftyTwoWeekHigh.fmt}</li>
                                            <li><span className='font-weight-bold'>Year Low:</span> ${focusStockStats.summaryDetail.fiftyTwoWeekLow.fmt}</li>
                                        </ul>
                                    </div>
                                    <Button variant='outline-danger d-block mx-auto' onClick ={(e) => removeFromWatchlist(e, focusStockStats.price.symbol)}>Remove from Watchlist</Button>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                    )}
                </Card>
        </div>
    )
}

export default UserWatchList
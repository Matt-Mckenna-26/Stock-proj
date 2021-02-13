import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const TrendingStonks = () => {
    const [trendingStonks, setTrendingStonks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [priceSorted, setPriceSorted] = useState(false);
    const [percentSorted, setPercentSorted] = useState(false);

    const sortByPercent = (e) => {
        setLoaded(false);
        setPriceSorted(false);
        trendingStonks.sort(function (a,b) {
            return b.regularMarketChangePercent - a.regularMarketChangePercent;
        })
        setPercentSorted(true);
    }
    const sortByDollar = () => {
        setLoaded(false);
        setPercentSorted(false);
        trendingStonks.sort(function (a,b) {
            return b.regularMarketChange - a.regularMarketChange;
        })
        setPriceSorted(true);
    }

    useEffect(()=> {
        axios.get('/api/trending/tickers')
        .then(res => { console.log(res.data.finance.result[0].quotes)
            setTrendingStonks(res.data.finance.result[0].quotes);
            setLoaded(true);
            })
        .catch(err => console.log({err}))
    }, []);

    return (
        <div className='p-3 border rounded-lg border-black bg-light col-10 mx-auto' id='trending'>
            <Badge pill variant='primary' className='d-block my-5 text-light mx-auto text-center' style={{height:'3rem', width: '28rem'}}>
                <h2>Trending at this Moment</h2>
            </Badge>
            <div>
                <Button onClick ={(e) => sortByPercent(e)} variant='outline-primary m-2'>Sort by largest % Change</Button>
                <Button onClick ={sortByDollar} variant='outline-primary m-2'>Sort by largest $ Change</Button>
            </div>
            {loaded === true  || priceSorted === true || percentSorted === true ?
                (<>
                    {trendingStonks.map((stonk, idx) => {
                    return stonk.regularMarketChangePercent > 0 ?
                    <Card
                        bg='success'
                        key={idx}
                        text='light'
                        style={{ width: '18rem', height:'18rem', display:'inline-block' }}
                        className="m-1 list-group-item align-top"
                    >
                        <Card.Header className='font-weight-bold'>{stonk.symbol}</Card.Header>
                            <Card.Body>
                                <Card.Title className='font-weight-bold'>{stonk.shortName}</Card.Title>
                                <Card.Text>
                                    <ul className='list-unstyled'>
                                        <li><span className='font-weight-bold'>Price:</span> ${stonk.regularMarketPrice}</li>
                                        <li><span className='font-weight-bold'>$ Change:</span> ${stonk.regularMarketChange}</li>
                                        <li><span className='font-weight-bold'>% Change:</span> + {stonk.regularMarketChangePercent}%</li>
                                        <li><span className='font-weight-bold'>Previous Close:</span> ${stonk.regularMarketPreviousClose}</li>
                                    </ul>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                    :
                    <Card
                        bg='danger'
                        key={idx}
                        text='light'
                        style={{ width: '18rem', height:'18rem', display:'inline-block' }}
                        className="m-1 list-group-item align-top"
                    >
                        <Card.Header className='font-weight-bold'>{stonk.symbol}</Card.Header>
                            <Card.Body>
                                <Card.Title className='font-weight-bold'>{stonk.shortName}</Card.Title>
                                <ul className='list-unstyled'>
                                <li><span className='font-weight-bold'>Price:</span> ${stonk.regularMarketPrice}</li>
                                        <li><span className='font-weight-bold'>$ Change:</span> ${stonk.regularMarketChange}</li>
                                        <li><span className='font-weight-bold'>% Change:</span>  {stonk.regularMarketChangePercent}%</li>
                                        <li><span className='font-weight-bold'>Previous Close:</span> ${stonk.regularMarketPreviousClose}</li>
                                    </ul>
                            </Card.Body>
                    </Card>
                })}</>): 
                    <>
                        <h2 className='text-primary'>Loading...</h2>
                        <Spinner animation="border" variant="primary" size='xl'/>
                    </>
                }
        </div>
    )
}

export default TrendingStonks 
import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const TrendingStonks = () => {
    const [trendingStonks, setTrendingStonks] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/trending/tickers')
        .then(res => { console.log(res.data.finance.result[0].quotes)
            setTrendingStonks(res.data.finance.result[0].quotes);
            })
        .catch(err => console.log({err}))
    }, []);
    return (
        <div className='m-4 p-4 border border-black'>
            <h2 className='m-4  p-4'> Trending at this Moment</h2>
            {trendingStonks.map((stonk, idx) => {
                return stonk.regularMarketChangePercent > 0 ?
                <Card
                    bg='success'
                    key={idx}
                    text='light'
                    style={{ width: '16rem', height:'18rem', display:'inline-block' }}
                    className="m-1 list-group-item align-top"
                >
                    <Card.Header>{stonk.symbol}</Card.Header>
                        <Card.Body>
                            <Card.Title>{stonk.shortName}</Card.Title>
                            <Card.Text>
                                <ul className='list-unstyled'>
                                    <li>Price: ${stonk.regularMarketPrice}</li>
                                    <li>$ Change: ${stonk.regularMarketChange}</li>
                                    <li>% Change: + {stonk.regularMarketChangePercent}%</li>
                                    <li>Previous Close: ${stonk.regularMarketPreviousClose}</li>
                                </ul>
                            </Card.Text>
                    </Card.Body>
                </Card>
                :
                <Card
                    bg='danger'
                    key={idx}
                    text='light'
                    style={{ width: '16rem', height:'18rem', display:'inline-block' }}
                    className="m-1 list-group-item align-top"
                >
                    <Card.Header>{stonk.symbol}</Card.Header>
                        <Card.Body>
                            <Card.Title>{stonk.shortName}</Card.Title>
                            <ul className='list-unstyled'>
                                    <li>Price: ${stonk.regularMarketPrice}</li>
                                    <li>$ Change: ${stonk.regularMarketChange}</li>
                                    <li>% Change: {stonk.regularMarketChangePercent}%</li>
                                    <li>Previous Close: ${stonk.regularMarketPreviousClose}</li>
                                </ul>
                        </Card.Body>
                </Card>
            })}
        </div>
    )
}

export default TrendingStonks 
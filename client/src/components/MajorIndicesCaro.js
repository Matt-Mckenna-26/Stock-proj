import React, {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const MajorIndicesCaro = () => {
    const [indices, setIndices] = useState([]);
    const [loaded,setLoaded] = useState(false);

    useEffect(()=> {
        axios.get('/api/market/summary')
        .then(res => { console.log(res.data)
            setIndices(res.data.MarketRegions.USA)
            setLoaded(true);
            })
        .catch(err => console.log({err}))
    }, []);

    return(
    <div className=' blue-bg p-2' id='summary'>
        <Badge pill variant='light' className='d-block my-3 text-primary mx-auto text-center' style={{height:'3rem', width: '28rem'}}>
                <h2>Market Summary</h2>
        </Badge>
    {loaded !== false ? 
        (<Carousel className = 'my-3 row py-3'>
            {
            indices.map((index,idx) => ( 
                <Carousel.Item interval={4700} key={idx} className='p-2 m-3 mx-auto'>
                    <div className='d-block w-100 text-light'>
                        <Card  style={{ width: '25rem', height:'20rem', display:'inline-block' }}
                        className="m-1 list-group-item align-top border rounded"> 
                            <Card.Title className='text-light p-1 bg-primary border rounded'>{index.Name}</Card.Title>
                                <ul className='list-unstyled p-2 font-weight-bold text-primary'>
                                    <h5 className='text-primary'>{index.ExchangeShortName}</h5>
                                    <li>Current Price: {index.Price}</li>
                                    {index.PriceChange >0 ? 
                                        <>
                                    <li className='text-success'>Change: {index.PriceChange}</li>
                                    <li className='text-success'>% Change: {index.PercentChange}%</li>
                                        </>:
                                        <>
                                    <li className='text-danger'>Change: {index.PriceChange}</li>
                                    <li className='text-danger'>% Change: {index.PercentChange}%</li> 
                                        </>}
                                    <li>Todays High: {index.DayHigh}</li>
                                    <li>Todays Low: {index.DayLow}</li>
                                    <li>Open: {index.OpenPrice}</li>
                                    <li>Yesterdays Close: {index.YesterdayPrice}</li>
                                </ul>
                        </Card>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>) : 
        <>
        <h2 className='text-light'> Loading...</h2>
        <Spinner animation="border" variant="light" size='xl'/> 
        </>
        }
    </div>
    )
}

export default MajorIndicesCaro;
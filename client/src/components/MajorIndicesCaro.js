import react, {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

const MajorIndicesCaro = () => {
    const [indices, setIndices] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/market/summary')
        .then(res => { console.log(res.data)
            setIndices(res.data.MarketRegions.USA)
            })
        .catch(err => console.log({err}))
    }, []);

    return(
    <div className='m-2' id='summary'>
        <h2 className='p-2 section-header'>Market Summary</h2>
    <Carousel className = 'my-3 row py-3 border border-black'>
        {
        indices.map((index,idx) => (
            <Carousel.Item interval={4700} key={idx} className='border border-black'>
                <div className='d-block w-100 text-primary'>
                    <h3 className='text-primary m-3 p-3'>{index.Name}</h3>    
                    <ul className='list-unstyled'>
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
                    <p className='text-primary'>Click left and right of screen to cycle through major indices</p>
                </div>
            </Carousel.Item>
        ))}
    </Carousel>
    </div>
    )
}

export default MajorIndicesCaro;
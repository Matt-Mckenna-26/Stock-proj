import react from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Spinner from 'react-bootstrap/Spinner'

const StockDetail = ({detailedStock, setDetailedStock, searched, detailedStockLoaded, handleSubmit, setTicker, ticker}) => {
    return(
        /// first condition will check if stock has been serached either on navbar or in this elmement, if serached
        /// the jumbo and form will be replaced with a spinner until the detailedstock data is loaded.
        <div id='search' className='blue-bg'>
            {searched === false ?
            <div>
                <h2 className='p-3 mt-2 text-light'>Look up in depth statistics of your favorite stocks.</h2>  
                <Form inline-block className='align-right navbar-link-font p-5'>
                    <FormLabel className='px-2 text-light font-weight-bold'>Enter ticker here:</FormLabel>
                    <FormControl type="text" placeholder="Search" className="col-lg-8 col-sm-10 mx-auto my-3" 
                    defaultValue={ticker} onChange={(e)=> setTicker(e.target.value)} onClick={(e)=> e.target.value =""} />
                    <Button  onClick = {handleSubmit} variant="light" className='m-3 text-primary'>Search</Button>
                </Form>
            </div> :
                    <>{searched === true && detailedStock.symbol !== undefined ? 
                            (<Card className="text-center mx-auto py-2 my-4" style={{width:'85%'}}>
                            <Card.Header>
                                <h3>{detailedStock.price.shortName}</h3>
                                <a className= 'mt-3' href={`${detailedStock.summaryProfile.website}`} target='blank'>Website</a>
                                <p><span className='font-weight-bold d-inline-block text-dark mb-0'>Industry: </span>  {detailedStock.summaryProfile.industry}</p>
                                <p><span className='font-weight-bold d-inline-block text-dark mb-0'>Symbol: </span>  {detailedStock.price.symbol}</p>
                                <p><span className='font-weight-bold d-inline-block  text-dark mb-0'>Exchange: </span>  {detailedStock.price.exchangeName}</p>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>About {detailedStock.price.shortName}</Card.Title>
                                    <Card.Text>
                                        <p>{detailedStock.summaryProfile.longBusinessSummary}</p>
                                    </Card.Text>
                                    <Card.Title>{detailedStock.price.symbol} Stock Information</Card.Title>
                                    <Card.Text className='my-2 py-3'>
                                        <div className='mx-3' style ={{display:"inline-block"}}>
                                            <ul className='list-unstyled'>
                                                <li><span className='font-weight-bold'>Current Price:</span> ${detailedStock.price.regularMarketPrice.fmt}</li>
                                                <li><span className='font-weight-bold'>Price Change:</span> ${detailedStock.price.regularMarketChange.fmt}</li>
                                                <li><span className='font-weight-bold'>% Change:</span> {detailedStock.price.regularMarketChangePercent.fmt}%</li>
                                                <li><span className='font-weight-bold'>Market Open:</span> ${detailedStock.price.regularMarketOpen.fmt}</li>
                                                <li><span className='font-weight-bold'>Previous Close:</span> ${detailedStock.price.regularMarketPreviousClose.fmt}</li>
                                            </ul>
                                        </div>
                                        <div className='mx-3 ' style ={{display:"inline-block"}}>
                                            <ul className='list-unstyled'>
                                                <li><span className='font-weight-bold'>Todays High:</span> ${detailedStock.price.regularMarketDayHigh.fmt}</li>
                                                <li><span className='font-weight-bold'>Todays Low:</span> ${detailedStock.price.regularMarketDayLow.fmt}</li>
                                                <li><span className='font-weight-bold'>Todays Volume:</span> {detailedStock.price.regularMarketVolume.fmt}</li>
                                                <li><span className='font-weight-bold'>Average Volume:</span> ${detailedStock.price.averageDailyVolume3Month.fmt}</li>
                                                <li><span className='font-weight-bold'>Market Cap:</span> ${detailedStock.price.marketCap.fmt}</li>
                                            </ul>
                                        </div>
                                        <div className='mx-3 align-top' style ={{display:"inline-block"}}>
                                            <ul className='list-unstyled'>
                                                <li><span className='font-weight-bold'>50 day Avg:</span> ${detailedStock.summaryDetail.fiftyDayAverage.fmt}</li>
                                                <li><span className='font-weight-bold'>Year High:</span> ${detailedStock.summaryDetail.fiftyTwoWeekHigh.fmt}</li>
                                                <li><span className='font-weight-bold'>Year Low:</span> ${detailedStock.summaryDetail.fiftyTwoWeekLow.fmt}</li>
                                            </ul>
                                        </div>
                                    </Card.Text>
                            </Card.Body>
                        </Card>) :
                            <div className='p-5'>
                                <h2 className='text-light'>Loading...</h2>
                                <Spinner animation="border" variant="light" size='xl'/> 
                            </div>
                    } 
                    </>
            }
        </div>
    )
}

export default StockDetail;
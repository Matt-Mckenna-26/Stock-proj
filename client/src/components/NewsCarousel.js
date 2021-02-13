import React, {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Badge from 'react-bootstrap/Badge'
import axios from 'axios';

const NewsCarousel = () => {
    const [stories, setStories] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        axios.get('/api/market/news')
        .then(res => { console.log(res.data.data.mostPopular.assets)
            setStories(res.data.data.mostPopular.assets);
            setLoaded(true);
            })
        .catch(err => console.log({err}))
    }, []);

    return(
    <div className='p-2 blue-bg' id='news'>
        <Badge pill variant='light' className='d-block my-5 text-primary mx-auto text-center' style={{height:'3rem', width: '35rem'}}>
                <h2>Headlines</h2>
        </Badge>
        {loaded !== false ? 
            (<Carousel className = 'py-3 row '>
                {
                stories.map((story,idx) => (
                    <Carousel.Item interval={4700} key={idx}>
                        <div className='d-block w-100 '>
                            {story.featuredMedia === null ? null :
                            <img src={`${story.featuredMedia.url}`} style ={{height:'9rem'}}alt={`media for ${story.shorterHeadline}`}/>}
                            <h4 className='text-light p-3'>{story.shorterHeadline}</h4>    
                            <a className='m-1' href={`${story.url}`} target='blank'>
                                <Button variant='light' className='text-primary m-5'>Visit story</Button>
                                </a>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>) : 
            <>
            <h2 className='text-light'>Loading...</h2>
            <Spinner animation="border" variant="light" size='xl'/> 
            </>
        }
    </div>
    )
}

export default NewsCarousel;
import react, {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';

const NewsCarousel = () => {
    const [stories, setStories] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/market/news')
        .then(res => { console.log(res.data.data.mostPopular.assets)
            setStories(res.data.data.mostPopular.assets);
            setLoaded(true);
            })
        .catch(err => console.log({err}))
    }, []);

    return(
    <div className='p-2 blue-bg' id='news'>
        <h2 className='p-2 section-header text-white'>Headlines</h2>
        {loaded !== false ? 
            (<Carousel className = 'py-3 row '>
                {
                stories.map((story,idx) => (
                    <Carousel.Item interval={4700} key={idx}>
                        <div className='d-block w-100 '>
                            {story.featuredMedia === null ? null :
                            <img src={`${story.featuredMedia.url}`} style ={{height:'9rem'}}alt='Story Image'/>}
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
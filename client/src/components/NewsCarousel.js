import react, {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

const NewsCarousel = () => {
    const [stories, setStories] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/market/news')
        .then(res => { console.log(res.data.data.mostPopular.assets)
            setStories(res.data.data.mostPopular.assets);
            })
        .catch(err => console.log({err}))
    }, []);

    return(
    <div className='m-2' id='news'>
        <h2 className='p-2 section-header'>Headlines</h2>
    <Carousel className = 'my-3 row py-3 border border-black'>
        {
        stories.map((story,idx) => (
            <Carousel.Item interval={4700} key={idx}>
                <div className='d-block w-100 border border-black'>
                    {story.featuredMedia === null ? null :
                    <img src={`${story.featuredMedia.url}`} style ={{height:'9rem'}}alt='Story Image'/>}
                    <h4 className='text-primary m-3 p-3'>{story.shorterHeadline}</h4>    
                    <a className='m-1' href={`${story.url}`} target='blank'>
                        <Button variant='outline-primary'>Visit story</Button>
                        </a>
                        <p className='text-primary p-3'>Click left and right of screen to cycle through headlines</p>
                </div>
            </Carousel.Item>
        ))}
    </Carousel>
    </div>
    )
}

export default NewsCarousel;
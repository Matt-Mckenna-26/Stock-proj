import react, {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

const NewsCarousel = () => {
    const [stories, setStories] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/market/news')
        .then(res => { console.log(res.data.data)
            setStories(res.data.data);
            })
        .catch(err => console.log({err}))
    }, []);

    return(
    <div className='m-4'>
        <h2 className='m-2 p-2'>Headlines</h2>
    <Carousel className = 'my-3 row py-3 border border-black'>
        {
        stories.map((story,idx) => (
            <Carousel.Item interval={4700} key={idx}>
                <div className='d-block w-100'>
                    <h3 className='text-primary m-5 p-3'>{story.attributes.title}</h3>    
                    <a className='m-4' href={`https://seekingalpha.com${story.links.self}`} target='blank'>
                        <Button variant='outline-primary'>Visit story</Button>
                        </a>
                        <p className='text-primary p-3'>Click left and right to cycle through headlines</p>
                </div>
            </Carousel.Item>
        ))}
    </Carousel>
    </div>
    )
}

export default NewsCarousel;
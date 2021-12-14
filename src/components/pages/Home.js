import React, {useState, useEffect} from 'react';
import Title from '../title/Title';
import Article from '../article/Article';
import axios from 'axios'

function Home() {
    const [state, setState] = useState(null);
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce5e9162c7b3458c859b24f84808594c').then((res) => {
           setState(res.data.articles) 
        }).catch(err => {
            console.log(err)
        })
    }, [])
    useEffect(() => {
        console.log(state)
    }, [state])
    const content = state !== null ? state.map((item, key) => {
       return <Article key={key} src={item.urlToImage} title={item.title} publishedAt={item.publishedAt.slice(1, 10)} description={item.description} url={item.url} name={item.source.name} />
    }) : null;
    return (
        <div className="home">
            <Title title="Home News" />
            <div className='container'>
                {content}
            </div>
        </div>
    )
}

export default Home


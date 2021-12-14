import React, {useState, useEffect} from 'react';
import Title from '../title/Title';
import Article from '../article/Article';
import axios from 'axios'

function Tesla() {
    const [state, setState] = useState(null);
    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-11-14&sortBy=publishedAt&apiKey=ce5e9162c7b3458c859b24f84808594c').then((res) => {
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
            <Title title="Tesla News" />
            <div className='container'>
                {content}
            </div>
        </div>
    )
}

export default Tesla

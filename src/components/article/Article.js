import React from 'react'

const Article = (props) => {
    return (
        <article>
            <div className="image-content">
                <img src={props.src} alt={props.title} />
            </div>
            <div>
              <h2>{props.title}</h2>
            </div>
            <div className="author">
                <span><strong>Author: </strong>{props.author}</span>
                <span><strong>Date: </strong>{props.publishedAt}</span>
            </div>
            <div className="content">
              <p>{props.description}</p>
            </div>
            <div className="footer">
            <a href={props.url} target="_blank" className="btn">
                <span><strong>See more at: </strong>{props.name}</span>
            </a>
            </div>
        </article>
    )
}

export default Article

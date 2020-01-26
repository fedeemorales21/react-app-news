import React from 'react'

const Article = props =>{
    
    return(
        <div className="card col-4 m-2" key={props.key}>
            <img src={props.post.urlToImage} className="card-img-top" alt={props.post.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.post.title}</h5>
                <p className="card-text">{props.post.description}</p>
                <a href={props.post.url} className="btn btn-primary btn-block">View source</a>
            </div>
        </div>

    )
}

export default Article;
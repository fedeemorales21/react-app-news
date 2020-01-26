import React from 'react';
import Article from './Article'
 const News = props => {

       
    return (
        <div className="row mx-auto">
            {
                props.error &&
                <div className="alert alert-danger mx-auto mt-5">
                    {props.error}
                </div>
            }

            {    
         
                props.posts.map((post,i) => (                   
                    <Article post={post} key={i}/>                     
                ))   
       
            }

        </div>
    )
}

export default News
import React, { Component } from 'react'

// COMPONENTS
import News from './component/News'
import Form from './component/Form'

// KEY
import { NEWS_KEY } from './keys'

// INSTANCE
export default class App extends Component {

  state = {
    posts:[],
    error: 'Without search'
  }

  getData = async  e =>{
    e.preventDefault();
    const { topic } = e.target.elements
    const topicValue = topic.value
    
    const URL = `http://newsapi.org/v2/everything?q=${topicValue}&apiKey=${NEWS_KEY}`

    const req = await fetch(URL)
    const res = await req.json()
    const { status,articles } = res

    if (status === 'ok' && articles.length > 0) {
      this.setState({
        posts:articles,
        error: null
      })
    }else{
      this.setState({
        error: 'No results yet',
        posts: null
      })
    }
 
  }

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <Form getData={this.getData}/>
          </div>
        </div>
        <div>
          <News posts={this.state.posts} error={this.state.error}/>
        </div>
      </div>
    )
  }
};

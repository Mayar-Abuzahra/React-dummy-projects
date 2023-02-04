import axios from 'axios';
import React, { Component } from 'react'

export default class Home extends Component {
    state={
        data:[]
    }
  componentDidMount(){
    this.getNews();
  }
  
  //get needed data from 'News API'
  getNews=async()=>{
    let {data}= await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-01-04&sortBy=publishedAt&apiKey=73b9b9807b684d63aed69ebeee32eacc')
    console.log(data)
    this.setState({data:data.articles})
  }
  
  render() {
    return (
      <div>
        <div className="container mt-5">
            <h1>Latest News</h1>
            <div className="row">
                {
                    this.state.data.map((article,index)=>
                            <div className="col-md-4" key={index}>
                                <div className="card">
                                    <div className="card-header">
                                        <img src={article.urlToImage} alt="news image" className='w-100'/>
                                        <h2>{article.title}</h2>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2>{article.title}</h2>
                                    <p>{article.description}</p>
                                </div>
                            </div>
                    )
                }
            </div>
        </div>
      </div>
    )
  }
}

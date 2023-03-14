import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

    constructor() {
        super(); //when we're inherit a class from exiting class so for calling parent constructor we use super() method;
        this.state = {
            article: [],
            loading: false,
            page: 1,
            totalResult: 0
        }
    }


    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbc5950898254f23a0f64dda4dca0cbf&page=1&pageSize=6`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ loading: false });
        this.setState
            ({
                article: parsedData.articles,
                totalResult: this.totalResult + parsedData.totalResult,
                loading: false
            })
    }

    previousPage = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4078208d8957405f9bb4fea26488d4de&page=${this.state.page - 1}&pageSize=6`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState
            ({
                article: parsedData.articles,
                page: this.state.page - 1,
                loading: false
            })

    }
    nextPage = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4078208d8957405f9bb4fea26488d4de&page=${this.state.page + 1}&pageSize=6`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState
            ({
                article: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            })

    }
    fetchMoreData = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbc5950898254f23a0f64dda4dca0cbf&page=${this.state.page + 1}&pageSize=6`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState
            ({
                article: this.state.article.concat(parsedData.articles),
                page: this.state.page + 1,
                totalResult : parsedData.totalResult

                
            })
    }
    render() {
        return (
            <>
                <div className="container">
                    <h1 className='my-4 text-center' style={{paddingTop :"60px"}}>News-App : Headlines </h1>
                    <InfiniteScroll
                        dataLength={this.state.article.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.article.length !== this.state.totalResult}
                        loader={(this.state.article.length !== this.state.totalResult) && <Spinner/>}
                    >
                        <div className="row container">
                            {this.state.article.map((element) => {
                                return <div className="col-md-3 mx-2 my-2 " key={element.url}>
                                    <NewsItem newsUrl={element.url} Title={element.title.length === null ? element.title : element.title.slice(0, 45)} discription={element.description === null ? element.description : element.description.slice(0, 88)} imgUrl={element.urlToImage} author={element.author} date={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </InfiniteScroll>
                    {/* {<div className='d-flex justify-content-between my-2'>
                        <button disabled={this.state.page <= 1} onClick={this.previousPage} type="button" className="btn btn-dark">&larr; Previous </button>
                        <button onClick={this.nextPage} type="button" className="btn btn-dark">Next &rarr;</button>
                    </div>}
                    {this.state.loading && <div className='d-flex align-items-center justify-content-center' style={{ paddingTop: "20%" }}>

                    </div>} */}
                </div>

            </>
        )
    }
}

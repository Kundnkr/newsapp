import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
      let {Title, discription, imgUrl, newsUrl, author, date} = this.props;
    return (
        <>
        <div className="card">
        <img src = {imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">{discription}</p>
          <p className="card-text"><small className="text-muted">By {author} On {new Date(date).toGMTString()} </small></p>
          <a href={newsUrl} target ="_blank" className="btn md-sm btn-dark">Read More</a>
        </div>
      </div>
        </>
    )
  }
}

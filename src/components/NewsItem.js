import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl } = this.props;
    return (
      <div className="my-3 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsDetail" className="btn btn-sm btn-secondary">
              Read Details
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="News Title" description="News Description" imgUrl="https://i.insider.com/645fd5bf11971c00188f3dba?width=1200&format=jpeg" />
          </div>
          <div className="col-md-4">
            <NewsItem title="News Title" description="News Description" imgUrl="https://i.insider.com/645fd5bf11971c00188f3dba?width=1200&format=jpeg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="News Title" description="News Description" imgUrl="https://i.insider.com/645fd5bf11971c00188f3dba?width=1200&format=jpeg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

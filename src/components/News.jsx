import React, { Component } from "react";
import NewsItems from "./NewsItems";
import propTypes from "prop-types";

export default class News extends Component {
  articles = []
  static propTypes = {
    countryName: propTypes.string,
    category: propTypes.string,
  };

  static defaultProps = {
    countryName: "US",
    category: "general",
  };

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=e6edd384e8b14578b46f7c569014ac25&page=${this.state.page}&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: 1,
    });
    console.log(parsedData);
  }

  handleNextBtn = async () => {
    if (this.state.page + 1 > Math.ceil(20 / 12)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.countryName
      }&category=${
        this.props.category
      }&apiKey=e6edd384e8b14578b46f7c569014ac25&page=${
        this.state.page + 1
      }&pageSize=12`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  handlePrevBtn = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.countryName
    }&category=${
      this.props.category
    }&apiKey=e6edd384e8b14578b46f7c569014ac25&page=${
      this.state.page - 1
    }&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="heading my-3">Tazza Khabar</h1>
          <div className="row my-0">
            {this.state.articles.map((items) => {
              return (
                <div className="col-md-4" key={items.url}>
                  <NewsItems
                    title={items.title ? items.title : ""}
                    desc={items.description ? items.description : ""}
                    img={
                      items.urlToImage
                        ? items.urlToImage
                        : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJldWF0aWZ1bCUyMGdpcmx8ZW58MHwwfDB8fHww"
                    }
                    url={items.url}
                  />
                </div>
              );
            })}
            <div className="container d-flex justify-content-between my-5">
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.handlePrevBtn}
                disabled={this.state.page <= 1}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.handleNextBtn}
                disabled={this.state.page + 1 > Math.ceil(20 / 12)}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

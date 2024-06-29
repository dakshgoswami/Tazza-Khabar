import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let {title, desc, img, url} = this.props
    return (
      <>
       <div className="card mb-2 my-1" style={{ width: "18rem", height: "100%"}}>
      <img
        src={img || 'default_image_url.jpg'} 
        className="card-img-top"
        alt={title || 'No Title'}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column overflow-auto" style={{ maxHeight: '250px' }}>
        <h6 className="card-title">{title}</h6>
        <div className="card-text flex-grow-1 overflow-auto" style={{ maxHeight: '150px' }}>
          {desc || 'No Description'}
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary mt-3">
          Learn More
        </a>
      </div>
    </div>
    
      </>
    );
  }
}

import React, { PropTypes, Component } from 'react'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';

export default class Photos extends Component {

  render() {

    let aspectRatio, width, height, imageUrl, imageTitle;
    let photosWithValidUrls = [];

    this.props.posts.forEach(function(obj,i){
        if (obj.preview !== undefined && obj.url.match(/\.(jpeg|jpg|gif|png)$/) != null){
          photosWithValidUrls.push(obj);
        }
    })

    let photos = photosWithValidUrls.map(function(obj,i){
      obj.preview.images.forEach(function(image){
        aspectRatio = parseFloat(image.source.width / image.source.height);
        width = image.source.width / 10;
        height = image.source.height / 10;
      })

      //let aspectRatio = parseFloat(obj.width_o / obj.height_o);
      return {
          src: obj.url,
          //src: (aspectRatio >= 3) ? obj.data.url : obj.data.url,
          width: width,
          height: height,
          aspectRatio: aspectRatio,
          lightboxImage:{src: obj.url, caption: obj.title}
      };
    });

    return (
      <Gallery photos={photos} />
    )
  }
}

Photos.propTypes = {
  posts: PropTypes.array.isRequired
}

import React, { Component } from 'react';
import Photo from './Photo';
import NoPhoto from './NoPhoto';



class Gallery extends Component {


  render() {
      const loading = this.props.loading;
      let photos;
      let title = this.props.title;
      const pictures = this.props.data;
      if (pictures.length === 0) {
        photos = <NoPhoto />
//Including return statement inside of if statement so that the no-photos styling can be applied only in the case that no photos are found
        return(
          <div className="no-photos">
            <h2>Images Of {title} </h2>
            <ul>
              {loading ? <h2>...Loading</h2> : photos }
            </ul>
          </div>
        );

      }
      else {
         photos = pictures.map(photo =>
            <Photo
              key={photo.id.toString()}
              server={photo.server}
              secret={photo.secret}
              farm={photo.farm}
              id={photo.id}
              />
        );
        return(
          <div className="photo-container">
            <h2>Images Of {title} </h2>
            <ul>
              {loading ? <h2>...Loading</h2> : photos }
            </ul>
          </div>
        );
      }

    }
  }

  export default Gallery;

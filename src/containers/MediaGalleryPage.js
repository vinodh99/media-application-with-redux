// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// // import {flickrImages,shutterStockVideos} from '../Api/api';
// import {connect} from 'react-redux';
// import {
//     selectImageAction, searchMediaAction,
//     selectVideoAction } from '../actions/mediaActions';
//   import PhotoPage from '../components/PhotoPage';
//   import VideoPage from '../components/VideoPage';
//   import '../styles/style.css';
  
// // import { searchMediaSaga } from '../sagas/mediaSaga';

// // mediaGalleryPage Component

// class MediaGalleryPage extends Component {

//     // dispatches *searchMediaAction* immediately after initial rendering.
//     // note that we are using dispatch method from the store to execute this task, courtsey of react0redux

//     constructor() {
//         super();
//         this.handleSearch = this.handleSearch.bind(this);
//         this.handleSelectImage = this.handleSelectImage.bind(this);
//         this.handleSelectVideo = this.handleSelectVideo.bind(this);
//       }
    
//     componentDidMount(){
//         // flickrImages('rain').then(images => console.log(images,'Images'));
//         // shutterStockVideos('rain').then(videos => console.log(videos,'Videos'));

//         this.props.dispatch(searchMediaAction('rain'));
//     }

//     // Dispatches *selectImageAction* when any image is clicked
//     handleSelectImage(selectedImage) {
//         this.props.dispatch(selectImageAction(selectedImage));
//     }

//     // Dispatches *selectvideoAction* when any video is clicked
//     handleSelectVideo(selectedVideo) {
//         this.props.dispatch(selectVideoAction(selectedVideo));
//     }

//     // Dispatches *searchMediaAction* with query param.
//     // We ensure action is dispatched to the store only if query param is provided.
//     handleSearch(event) {
//         event.preventDefault();
//         if (this.query !== null) {
//         this.props.dispatch(searchMediaAction(this.query.value));
//         this.query.value = '';
//         }
//     }

//         render() {
//                 // console.log(this.props.images,'images');
//                 // console.log(this.props.videos,'videos');
//                 // console.log(this.props.selectedImage,'selectedImage');
//                 // console.log(this.props.selectedVideo,'selectedVideo');
//                 return (
//                     <div className="container-fluid">
//                       {images && selectedImage? <div>
//                         <input
//                           type="text"
//                           ref={ref => (this.query = ref)}
//                         />
//                         <input
//                           type="submit"
//                      className="btn btn-primary"
//                           value="Search Library"
//                           onClick={this.handleSearch}
//                         />
//                         <div className="row">
//                           <PhotoPage
//                             images={images}
//                             selectedImage={selectedImage}
//                             onHandleSelectImage={this.handleSelectImage}
//                           />
//                           <VideoPage
//                             videos={videos}
//                             selectedVideo={selectedVideo}
//                             onHandleSelectVideo={this.handleSelectVideo}
//                           />
//                         </div>
//                       </div> : 'loading ....'}
//                     </div>
//                   );
//         }
//     }

// MediaGalleryPage.propTypes = {
//     // proptypes should be defined here
//     images: PropTypes.array,
//     selectedImage: PropTypes.object,
//     videos: PropTypes.array,
//     selectedVideo: PropTypes.object,
//     dispatch: PropTypes.func.isRequired
// }

// // subscribe component to redux store and merge the state into components props

// const mapStateToProps = ({ images,videos}) => ({
//     images: images[0],
//     selectedImage: images.selectedImage,
//     videos: videos[0],
//     selectedVideo: videos.selectedVideo
// })

// // connect method from react-router connects the component with redux store


// export default connect(mapStateToProps)(MediaGalleryPage);





import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import {
  selectImageAction, searchMediaAction,
  selectVideoAction } from '../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
import '../styles/style.css';

// MediaGalleryPage Component
class MediaGalleryPage extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
  }

  // Dispatches *searchMediaAction*  immediately after initial rendering
 componentDidMount() {
    this.props.dispatch(searchMediaAction('rain'));
  }

  // Dispatches *selectImageAction* when any image is clicked
  handleSelectImage(selectedImage) {
    this.props.dispatch(selectImageAction(selectedImage));
  }

  // Dispatches *selectvideoAction* when any video is clicked
  handleSelectVideo(selectedVideo) {
    this.props.dispatch(selectVideoAction(selectedVideo));
  }

  // Dispatches *searchMediaAction* with query param.
  // We ensure action is dispatched to the store only if query param is provided.
  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = '';
    }
  }

  render() {
    const { images, selectedImage, videos, selectedVideo } = this.props;
    return (
      <div className="container-fluid">
        {images && selectedImage? <div>
          <input
            type="text"
            ref={ref => (this.query = ref)}
          />
          <input
            type="submit"
       className="btn btn-primary"
            value="Search Library"
            onClick={this.handleSearch}
          />
          <div className="row">
            <PhotoPage
              images={images}
              selectedImage={selectedImage}
              onHandleSelectImage={this.handleSelectImage}
            />
            <VideoPage
              videos={videos}
              selectedVideo={selectedVideo}
              onHandleSelectVideo={this.handleSelectVideo}
            />
          </div>
        </div> : 'loading ....'}
      </div>
    );
  }
}

// Define PropTypes
MediaGalleryPage.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

 // Subscribe component to redux store and merge the state into component's props
const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(MediaGalleryPage);
import React, {Component} from 'react';
// import {flickrImages,shutterStockVideos} from '../Api/api';
import {connect} from 'react-redux';
import {searchMediaAction} from '../actions/mediaActions';
// import { searchMediaSaga } from '../sagas/mediaSaga';

// mediaGalleryPage Component

class MediaGalleryPage extends Component {

    // dispatches *searchMediaAction* immediately after initial rendering.
    // note that we are using dispatch method from the store to execute this task, courtsey of react0redux
    componentDidMount(){
        // flickrImages('rain').then(images => console.log(images,'Images'));
        // shutterStockVideos('rain').then(videos => console.log(videos,'Videos'));

        this.props.dispatch(searchMediaAction('rain'));
    }

    render() {
            console.log(this.props.images,'images');
            console.log(this.props.videos,'videos');
            console.log(this.props.selectedImage,'selectedImage');
            console.log(this.props.selectedVideo,'selectedVideo');
        return (
        <div></div>
        )
    }
}

MediaGalleryPage.propTypes = {
    // proptypes should be defined here
}

// subscribe component to redux store and merge the state into components props

const mapStateToProps = ({ images,videos}) => ({
    images: images[0],
    selectedImage: images.selectedImage,
    videos: videos[0],
    selectedVideo: videos.selectedVideo
})

// connect method from react-router connects the component with redux store


export default connect(mapStateToProps)(MediaGalleryPage);

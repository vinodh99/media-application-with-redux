import * as types from '../constants/actionTypes';


// returns an action type, selected_image and the image selected
export const selectedImageAction = (image) => ({
    type:types.SELECTED_IMAGE,
    image
});

//returns an action type, selected_video and the video selected

export const selectedVideoAction = (video) =>({
    type: types.SELECTED_VIDEO,
    video
});

// Returns an action type, SEARCH_MEDIA_REQUEST and the search criteria
export const searchMediaAction = (payload) => ({
    type: types.SEARCH_MEDIA_REQUEST,
    payload
  });

// The optional arguments in the action creators: payload, image, and video are passed at the 
// site of call/dispatch. Say, a user selects a video clip on our app, selectVideoAction is dispatched which returns SELECTED_VIDEO 
// action type and the selected video as payload. Similarly, when searchMediaAction is dispatched, SEARCH_MEDIA_REQUEST action type and payload are returned.


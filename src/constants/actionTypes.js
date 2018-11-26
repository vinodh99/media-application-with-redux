// It's preferable to keep your action types together.
export const SELECTED_IMAGE = 'SELECTED_IMAGE';
export const FLICKR_IMAGES_SUCCESS = 'FLICKR_IMAGES_SUCCESS';
export const SELECTED_VIDEO = 'SELECTED_VIDEO';
export const SHUTTER_VIDEOS_SUCCESS = 'SHUTTER_VIDEOS_SUCCESS';
export const SEARCH_MEDIA_REQUEST = 'SEARCH_MEDIA_REQUEST';
export const SEARCH_MEDIA_SUCCESS = 'SEARCH_MEDIA_SUCCESS';
export const SEARCH_MEDIA_ERROR = 'SEARCH_MEDIA_ERROR';


//  Action creators are functions that return plain 
// Javascript object of action type and an optional payload. So action creators create actions that are dispatched to the store. They are just pure functions.
// Let’s first define our action types in a file and export them for ease of use in other files. They’re constants and it’s a good practice to define them in a separate file(s).
import {combineReducers} from 'redux';
import images from './imageReducer';
import videos from './videoReducer';

const rootReducer = combineReducers({
    images,
    videos
})

export default rootReducer;


// We import combineReducers from Redux. CombineReducers is a helper function 
// that combines our images and videos reducers into a single reducer function that we can now pass to the creatorStore function.
// You might be wondering why we’re not passing in key/value pairs to combineReducers function. 
// Yes, you’re right. ES6 allows us to pass in just the property if the key and value are the same.
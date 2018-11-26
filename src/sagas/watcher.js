// You would remember reducers are pure functions and don’t handle side effects or async tasks; this is where redux-saga comes in handy.

// *redux-saga is a library that aims to make side effects 
// (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better — documentation.*



// Sagas are simply generator functions that abstract the complexities of an asynchronous workflow. It’s a terse way of handling async processes. 
// It’s easy to write, test and reason. Still confused, you might want to revisit the first part of this tutorial if you missed it.

import {takeLatest} from 'redux-saga/effects';
import {searchMediaSaga} from './mediaSaga';
import * as types from '../constants/actionTypes';


// watches for search_media_request action type synchronously


export default function* watchSearchMedia() {
    yield takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}
//*** */ watchSearchMedia watches for SEARCH_MEDIA_REQUEST action type and call searchMediaSaga function(saga) with the action’s payload from the action creator.***


// We want a mechanism that ensures any action 
// dispatched to the store which requires making API call is intercepted by the middleware and result of request yielded to the reducer.
// takeLatest is a high-level method that merges take and fork effect creators together. 
// It basically takes an action type and runs the function passed to it in a non-blocking manner with the result of the action creator. 
// As the name suggests, takeLatest returns the result of the last call.
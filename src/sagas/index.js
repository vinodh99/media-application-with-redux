import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watcher';

export default function* startForman() {
    yield fork(watchSearchMedia);
}

// fork is an effect creator that provisions the middleware to run a non-blocking call on watchSearchMedia saga.

// Here, we can bundle our watcher sagas as an array and yield them at once if we have more than one.


import{ActionTypes} from "../Constants/action-types";

import React from 'react';

const initialState ={
    students: []
}

export const libraryReducers = (state=initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_STUDETS:
            return (state, payload);

            default:
                return state;
    }
}
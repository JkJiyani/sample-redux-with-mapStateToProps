import { combineReducers } from 'redux'

const postsReducer = (state = [], action) => {
    switch (action.type) {
        default: return state
    }
}

const rootReducer = combineReducers({
    posts: postsReducer
});

export default rootReducer;
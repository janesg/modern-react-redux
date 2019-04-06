import jsonPlaceholder from '../api/jsonPlaceholder';

import _ from 'lodash';

// Combined action creator is another approach to prevent over-fetching of users
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // Call action creators from within an action creator
    await dispatch(fetchPosts());
    // Get an array of unique user ids
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // No need to await on dispatch because nothing left to do
    userIds.forEach(id => dispatch(fetchUser(id)));
    
    // Could also be written using the lodash chain function as follows
    // _.chain(getState().posts)
    //     .map('userId')
    //     .uniq()
    //     .forEach(id => dispatch(fetchUser(id)))
    //     .value();
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};

// To avoid making network requests for the same user multiple
// times (i.e. over-fetching)... we could memoize the function as follows
// but downside is we can never re-fetch a specific user...one time only
// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });


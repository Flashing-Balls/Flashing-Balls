const defaultState = {
  posts: [],
};

export default function reducer( state = defaultState, action ) {
  switch ( action.type ) {
    case 'ON_POSTS_FETCHED': {
      console.log( 'ON_POSTS_FETCHED', action.posts );
      const newState = [ ...state ];
      newState.posts = action.posts;
      return newState;
    }
    // no default
  }

  return state;
}

export const ON_POSTS_FETCHED = posts => ( {
  type: 'ON_POSTS_FETCHED',
  posts,
} );

export const ON_COMMENT_SUBMIT_START = id => ( {
  type: 'ON_COMMENT_SUBMIT_START',
  id,
} );

export const ON_COMMENT_SUBMITTED = ( comment, id ) => ( {
  type: 'ON_COMMENT_SUBMITTED',
  comment,
  id,
} );

export const ON_USER_PROFILE_FETCH_START = () => ( {
  type: 'ON_VIDEOS_FETCH_START',
} );

export const ON_USER_PROFILE_FETCHED = user => ( {
  type: 'ON_USER_PROFILE_FETCHED',
  user,
} );


export const ON_VIDEOS_FETCHED = videos => ( {
  type: 'ON_VIDEOS_FETCHED',
  videos,
} );

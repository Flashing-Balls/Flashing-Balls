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

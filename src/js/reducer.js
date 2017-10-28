const defaultState = {
  posts: [],
  userVideos: [],
  userVideosFetched: false,
  userSkills: [],
  userSkillsFetched: false,
};

export default function reducer( state = defaultState, action ) {
  switch ( action.type ) {
    case 'ON_POSTS_FETCHED': {
      return Object.assign( {}, state, { posts: action.posts } );
    }
    case 'ON_COMMENT_SUBMIT_START': {
      const newState = Object.assign( {}, state );

      newState.posts[ action.id ].comments.push( { pending: true } );

      return newState;
    }
    case 'ON_COMMENT_SUBMITTED': {
      const newState = Object.assign( {}, state );
      newState.posts[ action.id ].comments.splice( -1, 1, action.comment );
      return newState;
    }
    case 'ON_VIDEOS_FETCH_START': {
      return Object.assign( {}, state, { userVideosFetched: false } );
    }
    case 'ON_VIDEOS_FETCHED' : {
      return Object.assign( {}, state, { userVideosFetched: true, userVideos: action.videos } );
    }
    case 'ON_SKILLS_FETCH_START': {
      return Object.assign( {}, state, { userSkillsFetched: false } );
    }
    case 'ON_SKILLS_FETCHED' : {
      return Object.assign( {}, state, { userSkillsFetched: true, userSkills: action.skills } );
    }
    case 'ON_USER_PROFILE_LEAVE': {
      return Object.assign( {}, state, {
        userSkillsFetched: false,
        userVideosFetched: false,
        userVideos: [],
        userSkills: [],
      } );
    }
    // no default
  }

  return state;
}

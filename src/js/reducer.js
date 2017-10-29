const defaultState = {
  posts: [],
  userVideos: [],
  userVideosFetched: false,
  userSkills: [],
  userSkillsFetched: false,
  loggedUser: {
    username: 'hugoboss',
    fullname: 'Hugo Boss',
  },
  userProfile: {},
  userProfileFetched: false,
};

export default function reducer( state = defaultState, action ) {
  switch ( action.type ) {
    case 'ON_POSTS_FETCHED': {
      return Object.assign( {}, state, { posts: action.posts } );
    }
    case 'ON_COMMENT_SUBMIT_START': {
      const newState = JSON.parse( JSON.stringify( state ) );
      const comments = newState.posts[ action.id ].comments;
      comments.push( { pending: true, id: comments.length, user: state.loggedUser, text: '' } );
      return newState;
    }
    case 'ON_COMMENT_SUBMITTED': {
      const newState = JSON.parse( JSON.stringify( state ) );
      const comments = newState.posts[ action.id ].comments;
      comments.splice( -1, 1, {
        id: comments.length, user: state.loggedUser, text: action.comment,
      } );
      return newState;
    }
    case 'ON_USER_PROFILE_FETCH_START': {
      return Object.assign( {}, state, { userVideosFetched: false, userProfileFetched: false } );
    }
    case 'ON_USER_PROFILE_FETCHED' : {
      return Object.assign( {}, state, { userProfileFetched: true, userProfile: action.user } );
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
        userProfileFetched: false,
        userVideos: [],
        userSkills: [],
        userProfile: {},
      } );
    }
    // no default
  }

  return state;
}

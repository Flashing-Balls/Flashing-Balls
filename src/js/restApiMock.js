import axios from 'axios';
import videoUrl from '../img/video.jpg';

export function getPosts() {
  return axios.get( 'http://masterit-backend.azurewebsites.net/api/Posts/1', { Accept: 'application/json' } )
    .then( response => response.data )
    .then( data => data.sort( () => Math.random() - 0.5 ) );
  // return Promise.resolve( DATA );
}

export function sendComment() {
  return Promise.resolve();
}

export function getUserVideos() {
  return axios.get( 'http://masterit-backend.azurewebsites.net/api/Users/4/posts', { Accept: 'application/json' } )
    .then( response => response.data );
}

export function getSkills() {
  return axios.get( 'http://masterit-backend.azurewebsites.net/api/SkillProgresses/4', { Accept: 'application/json' } )
    .then( response => response.data );
}

export function getUserProfile( username ) {
  return axios.get( `http://masterit-backend.azurewebsites.net/api/Users/${ username }`, { Accept: 'application/json' } )
    .then( response => response.data );
}

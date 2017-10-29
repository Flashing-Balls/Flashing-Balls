import axios from 'axios';
import videoUrl from '../img/video.jpg';

const user1 = {
  username: 'johndoe',
  fullname: 'John Doe',
  avatar: '../img/avatar.jpg',
};

const user2 = {
  username: 'tinaturner',
  fullname: 'Tina Turner',
  avatar: '../img/avatar.jpg',
};

const user3 = {
  username: 'zoezandbgerg',
  fullname: 'Zoe Zandberg',
  avatar: '../img/avatar.jpg',
};

const user4 = {
  username: 'tonyhawk',
  fullname: 'Tony Hawk',
  avatar: '../img/avatar.jpg',
};

export function getPosts() {
  return axios.get( 'http://masterit-backend.azurewebsites.net/api/Posts/1', { Accept: 'application/json' } )
    .then( response => response.data )
    .then( data => data.sort( () => Math.random() - 0.5 ) );
}

export function getPostById( UserId, SkillId ) {
  return axios.get( `http://masterit-backend.azurewebsites.net/api/Posts?userId=${ UserId }&skillId=${ SkillId }`, { Accept: 'application/json' } )
    .then( response => ( console.log( response.data ) ) );
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

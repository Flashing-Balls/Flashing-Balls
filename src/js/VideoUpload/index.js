import Preact from 'preact';
import { withRouter } from 'react-router-dom';
import Input from '../Input';
import './VideoUpload.sass';

function onSubmit( e, history ) {
  e.preventDefault();
  history.push( '/' );
}

const UserProfile = ( { history } ) => (
  <form onSubmit={ e => onSubmit( e, history ) } className="videoUpload">
    <p>Youtube video link</p>
    <Input />
    <label className="input-wrapper">
      <select>
        <option value="1">Kick flip</option>
        <option value="2">Nerd flip</option>
        <option value="3">Back flip</option>
      </select>
    </label>
    <label>
      <input type="checkbox" name="success" value="Ratable" />I want to rate it
        </label>
    <label className="input-wrapper">
      <button type="submit">
            Upload
          </button>
    </label>
  </form>
    );

export default withRouter( UserProfile );

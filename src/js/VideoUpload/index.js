import Preact from 'preact';
import { withRouter, Link } from 'react-router-dom';

import Select from '../Select';
import Checkbox from '../Checkbox';

import './video_upload.sass';

function onSubmit( e, history ) {
  e.preventDefault();
  history.push( '/' );
}

const UserProfile = ( { history } ) => (
  <form onSubmit={ e => onSubmit( e, history ) } className="videoUpload">
    <Link to="/"><i className="material-icons back">chevron_left</i></Link>
    <h3>Add new post</h3>
    {/* <p>Youtube video link</p>
        <Input /> */}
    <input type="file" />
    <br />
    <br />
    <small>Skill:</small>
    <Select>
      <option value="1">Kick flip</option>
      <option value="2">Nerd flip</option>
      <option value="3">Back flip</option>
    </Select>
    <Checkbox />
    <label className="input-wrapper">
      <button type="submit" className="submit-btn">
            Upload
          </button>
    </label>
  </form>
    );

export default withRouter( UserProfile );

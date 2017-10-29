import Preact from 'preact';
import Input from '../Input';

import './VideoUpload.sass';

export default class UserProfile extends Preact.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div className="videoUpload">
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
          <button>
            Upload
          </button>
        </label>
      </div>
    );
  }
}

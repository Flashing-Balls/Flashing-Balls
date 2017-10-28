import Preact from 'preact';
import './video_upload.sass';

export default class UserProfile extends Preact.Component {
  constructor() {
    super();
    this.onInput = this.onInput.bind( this );

    this.state = {
      value: '',
    };
  }

  onInput( e ) {
    this.setState( {
      value: e.target.value,
    } );

    if ( this.props.nativeInput && this.props.nativeInput.onInput ) {
      this.props.nativeInput.onInput( e );
    }
  }

  render() {
    return (
      <div className="videoUpload">
        <p>Youtube video link</p>
        <label className="input-wrapper">
          <input onInput={ this.onInput } { ...this.props.nativeInput } />
          <div className="input-wrapper__line" />
        </label>
        <label className="input-wrapper">
          <select onInput={ this.onInput } { ...this.props.nativeInput }>
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

import Preact from 'preact';

import './checkbox.sass';

export default class UploadCheckbox extends Preact.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <label className="checkbox-wrapper">
        <input type="checkbox" name="success" value="Ratable" id="ratable" />
        <div className="checkbox__icon">
          <i className="material-icons checked">check_box</i>
          <i className="material-icons unchecked">check_box_outline_blank</i>
        </div>
        <span>I want it to be rated</span>
      </label>
    );
  }
}

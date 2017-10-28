import Preact from 'preact';

import './input.sass';

export default class Input extends Preact.Component {
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

    if ( this.props && this.props.onInput ) {
      this.props.onInput( e );
    }
  }

  render() {
    const placeholderClass = ( this.state.value === '' ) ? 'visible' : 'hidden';

    const { placeholder, ...rest } = this.props;
    const placholder = ( <span className={ `input-wrapper__placeholder input-wrapper__placeholder--${ placeholderClass }` }>{ this.props.placeholder }</span> );

    return (
      <label className="input-wrapper">
        { this.props.placeholder ? placholder : null }
        <input onInput={ this.onInput } { ...rest } />
        <div className="input-wrapper__line" />
      </label>
    );
  }
}

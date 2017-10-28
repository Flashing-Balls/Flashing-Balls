import Preact from 'preact';

import './input.sass';

export default class Header extends Preact.Component {
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
    const placeholderClass = ( this.state.value === '' ) ? 'visible' : 'hidden';

    const placholder = ( <span className={ `input-wrapper__placeholder input-wrapper__placeholder--${ placeholderClass }` }>{ this.props.placeholder }</span> );

    return (
      <label className="input-wrapper">
        { this.props.placeholder ? placholder : null }
        <input onInput={ this.onInput } { ...this.props.nativeInput } />
        <div className="input-wrapper__line" />
      </label>
    );
  }
}

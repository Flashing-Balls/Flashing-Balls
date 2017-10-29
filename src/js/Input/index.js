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

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.value !== this.props.value ) {
      this.setState( {
        value: nextProps.value,
      } ); 
    }
  }

  onInput( e ) {
    this.setState( {
      value: e.target.value,
    } );

    if ( this.props && this.props.onInput ) {
      this.onInputRoot( e );
    }
  }

  render() {
    const placeholderClass = ( this.state.value === '' ) ? 'visible' : 'hidden';

    const { placeholder, onInput, ...rest } = this.props;
    this.onInputRoot = onInput;
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

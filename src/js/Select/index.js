import Preact from 'preact';
import './select.sass';

export default class Select extends Preact.Component {
  constructor( props ) {
    super();
    this.state = {
      current: props.children[ 0 ].children[ 0 ],
      open: false,
    };

    this.select = this.select.bind( this );
    this.focus = this.focus.bind( this );
    this.blur = this.blur.bind( this );
  }

  select( n ) {
    this.setState( {
      current: this.props.children[ n ].children[ 0 ],
    } );
  }

  focus() {
    this.setState( {
      open: true,
    } );
  }

  blur() {
    this.setState( {
      open: false,
    } );
  }

  render() {
    const children = this.props.children.map(
      ( El, i ) => <button onClick={ () => this.select( i ) }>{ El }</button>
    );

    return (
      <label className={ `input-wrapper select ${ this.state.open ? 'select--open' : '' }` }>
        <input value={ this.state.current } onFocus={ this.focus } onBlur={ this.blur } />
        <div className="input-wrapper__line" />
        <div className="select__dropdown">
          { children }
        </div>
      </label>
    );
  }
}

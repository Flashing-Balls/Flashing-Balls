import Preact from 'preact';
import './video.sass';

export default ( { url } ) => (
  <div className="video" style={ { backgroundImage: `url(${ url })` } } />
);

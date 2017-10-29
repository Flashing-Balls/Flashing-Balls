import Preact from 'preact';
import './video.sass';

export default ( { url } ) => (
  <div className="video">
    <iframe
      className="video__iframe"
      src={ `https://www.youtube.com/embed/${ url }` }
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

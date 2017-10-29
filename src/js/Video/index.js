import Preact from 'preact';
import './video.sass';

export default ( { url, children } ) => (
  <div className="video">
    {children}
    <iframe
      title="1"
      className="video__iframe"
      src={ `https://www.youtube.com/embed/${ url }` }
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

import Preact from 'preact';
import './comment.sass';

export default ( { user, text } ) => (
  <article className="comment">
    <span className="comment__user">{ user.fullname }</span>
    <br />
    <span>{ text }</span>
  </article>
);

import Preact from 'preact';
import { Link } from 'react-router-dom';

import './comment.sass';

export default ( { user, text } ) => (
  <article className="comment">
    <Link to={ `/user/${ user.username }` } className="comment__user">{ user.fullname }</Link>
    <br />
    <span>{ text }</span>
  </article>
);

import Preact from 'preact';
import { Link } from 'react-router-dom';

import './comment.sass';

export default ( { user, text } ) => {
  user = user || { Username: 'tinaturner', FirstName: 'Tina', LastName: 'Turner' };
  return (
    <article className="comment">
      <Link to={ `/user/${ user.Username }` } className="comment__user">{ `${ user.FirstName } ${ user.LastName }` }</Link>
      <br />
      <span>{ text }</span>
    </article>
  ); 
};

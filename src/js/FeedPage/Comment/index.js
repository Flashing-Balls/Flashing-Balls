import Preact from 'preact';
import './comment.sass';

export default ( { user, text } ) => {
  user = user || { FirstName: 'Kacper', LastName: 'Pietrzak' };
  return (
    <article className="comment">
      <span className="comment__user">{ `${ user.FirstName } ${ user.LastName }` }</span>
      <br />
      <span>{ text }</span>
    </article>
  );
};

import Preact from 'preact';
import Video from '../Video';
import User from '../User';
import './post.sass';

export default class Post extends Preact.Component {
  renderComments() {
    return this.props.data.comments.map( ( { user, text, id } ) => (
      <li key={ id }>
        <p><User username={ user } fullname={ user } /> { text }</p>
      </li>
      ) );
  }
  render() {
    const { user, video } = this.props.data;
    return (
      <article className="post">
        <header className="post__header">
          <User avatar={ user } fullname={ user } username={ user } />
        </header>
        <main>
          <section>
            <Video url={ video } />
          </section>
          <section>
            <ul className="comments">
              { this.renderComments() }
            </ul>
          </section>
        </main>
        <input />
      </article>
    );
  }
}

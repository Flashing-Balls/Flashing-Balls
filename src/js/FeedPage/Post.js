import Preact from 'preact';

export default class Post extends Preact.Component {
  renderComments() {
    return this.props.data.comments.map( ( { user, text, id } ) => (
      <li key={ id }>
        <p><b>{ user }</b> { text }</p>
      </li>
      ) );
  }

  render() {
    const { user, video } = this.props.data;
    return (
      <div>
        <p>{user}</p>
        <p>{video}</p>
        <ul className="comments">
          {this.renderComments()}
        </ul>
        <input />
      </div>
    );
  }
}

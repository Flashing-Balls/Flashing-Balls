import Preact from 'preact';
import { connect } from 'react-redux';

export default class Post extends Preact.Component {
  renderComments() {
    return this.props.data.comments.map( ( comment ) => {
      return (
        <div>
          <p><b>{ comment.user }</b> { comment.text }</p>
        </div>
      );
    } );
  }

	render() {
    const { user, video, comments } = this.props.data;
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

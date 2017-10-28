import Preact from 'preact';
import { connect } from 'react-redux';
import { ON_COMMENT_SUBMIT_START, ON_COMMENT_SUBMITTED } from '../actions';
import { sendComment } from '../restApiMock';
import Video from '../Video';
import Avatar from '../Avatar';
import Comment from './Comment/';
import Input from '../Input/';
import './post.sass';

class Post extends Preact.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }
  onInputChange( { target } ) {
    this.setState( { inputValue: target.value } );
  }
  onSubmit() {
    this.props.onCommentSubmit( this.state.inputValue, this.props.data.id );
  }
  renderComments() {
    return this.props.data.comments.map(
      ( { user, text, id } ) => ( <Comment key={ id } user={ user } text={ text } /> )
    );
  }
  render() {
    const { user, video } = this.props.data;
    return (
      <article className="post">
        <header className="post__header">
          <Avatar avatar={ user.avatar } fullname={ user.fullname } username={ user.username } />
        </header>
        <main>
          <section>
            <Video url={ video } />
          </section>
          <section className="comments">
            { this.renderComments() }
          </section>
        </main>
        <Input placeholder="Doin' great mate" nativeInput={ { type: 'text', onInput: _ => this.onInputChange( _ ) } } />
        <button
          onClick={ _ => this.onSubmit( _ ) }
        >Submit</button>
      </article>
    );
  }
}

const mapDispatchToProps = dispatch => ( {
  onCommentSubmit: ( value, id ) => {
    dispatch( ON_COMMENT_SUBMIT_START( id ) );
    sendComment()
      .then( () => {
        dispatch( ON_COMMENT_SUBMITTED( value, id ) );
      } );
  },
} );

export default connect( null, mapDispatchToProps )( Post );

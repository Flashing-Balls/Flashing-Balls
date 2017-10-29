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
      rated: false,
      feedback: 'feedback',
    };
  }
  onInputChange( { target } ) {
    this.setState( { inputValue: target.value } );
  }
  onSubmit( e ) {
    e.preventDefault();

    this.props.onCommentSubmit( this.state.inputValue, this.props.data.Id );
    this.setState( { inputValue: '' } );
  }
  onApprove() {
    this.setState( { rated: true, feedback: 'Approved' } );
  }
  onReject() {
    this.setState( { rated: true, feedback: 'Rejected' } );
  }
  renderFeedback() {
    return (
      <div className={ `ratable-feedback ratable-feedback--${ this.state.feedback.toLowerCase() }` }>
        <i className="material-icons">{ this.state.feedback === 'Approved' ? 'done' : 'close' }</i>
        { this.state.feedback }
      </div>
    );
  }
  renderButtons() {
    return (
      <div className="ratable-buttons-container">
        <button className="ratable-button ratable-button--ok" onClick={ () => this.onApprove() }>
          <i className="material-icons">done</i>
          Approve
        </button>

        <button className="ratable-button ratable-button--nook" onClick={ () => this.onReject() }>
          <i className="material-icons">close</i>
          Reject
        </button>
      </div>
    );
  }
  renderComments() {
    return this.props.data.Comments.map(
      ( { User, Content, Id } ) => ( <Comment key={ Id } user={ User } text={ Content } /> )
    );
  }
  render() {
    const { User, VideoUrl } = this.props.data;
    return (
      <article className="post">
        <header className="post__header">
          <Avatar avatar={ User.AvatarUrl } fullname={ `${ User.FirstName } ${ User.LastName }` } username={ User.Username } />
        </header>
        <main>
          <section>
            <Video url={ VideoUrl } />
          </section>
          {
            this.state.rated ?
            this.renderFeedback() :
            this.renderButtons()
          }
          <section className="comments">
            { this.renderComments() }
          </section>
        </main>
        <form className="comment-input" onSubmit={ _ => this.onSubmit( _ ) }>
          <Input
            value={ this.state.inputValue }
            placeholder="Doin' great mate"
            type="text"
            onInput={ _ => this.onInputChange( _ ) }
          />
          <button
            className="comment-input__btn"
            onClick={ _ => this.onSubmit( _ ) }
            type="submit"
          >
            <i className="material-icons">send</i>
          </button>
        </form>
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

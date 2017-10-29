import Preact from 'preact';
import moment from 'moment';
import axios from 'axios';

import './skill.sass';

export default class Skill extends Preact.Component {
  constructor() {
    super();
    this.onOpen = this.onOpen.bind( this );

    this.state = {
      open: [],
      isFetched: false,
      isVisible: false,
    };
  }

  onOpen() {
    if ( !this.state.isFetched ) {
      this.fetchData();
    }

    this.setState( { isVisible: !this.state.isVisible } );
  }

  fetchData() {
    const { UserId, SkillId } = this.props.skill;
    return axios.get( `http://masterit-backend.azurewebsites.net/api/Posts?userId=${ UserId }&skillId=${ SkillId }`, { Accept: 'application/json' } )
      .then( response => ( this.setState( {
        open: response.data,
        isFetched: true,
      } ) ) );
  }

  render() {
    const date = moment( this.props.skill.CompletedOn, moment.ISO_8601 );

    const opened = this.state.open.map( ( post ) => {
      const postDate = moment( post.Date, moment.ISO_8601 );
      return (
        <section className="skill">
          <div className="skill__container">
            <span className="skill__month">{ postDate.format( 'MMM' ) }</span>
            <span className="skill__day skill__day--open">{ postDate.format( 'D' ) }</span>
            <span className="skill__name" />
          </div>
          <div className="skill__image"><img alt="video" src={ `http://img.youtube.com/vi/${ post.VideoUrl }/0.jpg` } /></div>
        </section>
      );
    } );

    return (
      <div>
        <section role="button" tabIndex={ 0 } className="skill" onClick={ this.onOpen }>
          <div className="skill__container">
            <span className="skill__month">{ date.format( 'MMM' ) }</span>
            <span className={ `skill__day${ this.state.isVisible && this.state.isFetched ? ' skill__day--open' : '' }` }>{ date.format( 'D' ) }</span>
            <span className="skill__name">{this.props.skill.Skill.Name}</span>
          </div>
        </section>
        { this.state.isVisible ? opened : null }
      </div>
    );
  }
}

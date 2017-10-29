import Preact from 'preact';
import moment from 'moment';

import './skill.sass';

export default class Skills extends Preact.Component {
  render() {
    const date = moment( this.props.skill.CompletedOn, moment.ISO_8601 );

    return (
      <section className="skill">
        <span className="skill__month">{ date.format( 'MMM' ) }</span>
        <span className="skill__day">{ date.format( 'DD' ) }</span>
        <span className="skill__name">{this.props.skill.Skill.Name}</span>
      </section>
    );
  }
}

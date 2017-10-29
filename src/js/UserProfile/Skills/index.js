import Preact from 'preact';
import Skill from './Skill/';

import './skills.sass';

export default class Skills extends Preact.Component {
  render() {
    const skillList = this.props.skills.map( skill => ( <Skill skill={ skill } /> ) );

    return (
      <div className="skills">
        <div className="skills__pipe" />
        { skillList }
      </div>
    );
  }
}

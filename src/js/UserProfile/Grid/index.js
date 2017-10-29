import Preact from 'preact';
import Video from './Video';

import './grid.sass';

export default class Grid extends Preact.Component {

  render() {
    const vids = this.props.videos.map( vid => ( <Video video={ vid } /> ) );

    return (
      <section className="grid">
        { vids }
      </section>
    );
  }
}

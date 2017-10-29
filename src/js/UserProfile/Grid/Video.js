import Preact from 'preact';


export default class Video extends Preact.Component {
  render() {
    return (
      <div className="grid__video">
        <iframe
          title="1"
          className="grid__video__img"
          src={ `https://www.youtube.com/embed/${ this.props.video.VideoUrl }` }
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}

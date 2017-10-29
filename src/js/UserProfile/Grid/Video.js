import Preact from 'preact';

export default class Video extends Preact.Component {
  render() {
    return (
      <div className="grid__video">
        <div className="grid__video__img" style={ { backgroundImage: `url(http://img.youtube.com/vi/${ this.props.video.VideoUrl }/0.jpg)` } } />
      </div>
    );
  }
}

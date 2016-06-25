class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      allVideos: props.videoData,
      currentVideo: props.videoData[0],
    };

  }

  onClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  onSubmit(searchString) {

    var options = {
      q: searchString,
      max: 5,
      key: YOUTUBE_API_KEY,
    };

    searchYouTube(options, (data) => this.setState({
      allVideos: data.items
    }));
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.allVideos} clickHandler={this.onClick} context={this}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

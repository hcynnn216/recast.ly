class App extends React.Component {
  constructor(props) {
    super(props);

    var options = {
      query: 'react',
      max: 5,
      key: YOUTUBE_API_KEY,
    };

    this.state = {
      allVideos: [],
      currentVideo: undefined,
    };

    props.searchYouTube(options, (data) => {
      if (data.items) {
        var videoData = data.items;
      } else {
        var videoData = data;
      }
      this.setState({
        allVideos: videoData,
        currentVideo: videoData[0]
      });
    });

  }

  onClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  onSubmit(event, searchString = 'react') {
    console.log(event);
    // var options = {
    //   query: searchString,
    //   max: 5,
    //   key: YOUTUBE_API_KEY,
    // };

    // searchYouTube(options, (data) => this.setState({
    //   allVideos: data.items,
    //   currentVideo: data.items[0]
    // }));
  }

  render() {
      return (
        <div>
          <Nav submitHandler={this.onSubmit} context={this}/>
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

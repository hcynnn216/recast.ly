// TODO: Render the `App` component to the DOM

var options = {
  query: 'corgis',
  max: 5,
  key: YOUTUBE_API_KEY
};

searchYouTube(options, (data) => {
  console.log(data.items);
  ReactDOM.render(<App videoData={data.items}/>, document.getElementById('app'));
});

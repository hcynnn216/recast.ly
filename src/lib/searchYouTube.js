var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: { 
      part: 'id, snippet', 
      maxResults: options.max, 
      key: options.key, 
      q: options.query,
      type: 'video',
      videoEmbeddable: true
    },
    success: callback,
  });
};

window.searchYouTube = searchYouTube;

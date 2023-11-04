const GOOGLE_API_KEY = "AIzaSyDLw42dGyFznfwr5cXb5h7DCVuDXemM14I";

const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`;

const GOOGLE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export { YOUTUBE_VIDEO_API, GOOGLE_SEARCH_API };

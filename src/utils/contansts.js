const GOOGLE_API_KEY = "AIzaSyC4h3a0XYma2wiHz6u615hE-8dp89FzBys";

const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`;

const GOOGLE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const YOUTUBE_SEARCH_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;

export { YOUTUBE_VIDEO_API, GOOGLE_SEARCH_API, YOUTUBE_SEARCH_VIDEOS_API };

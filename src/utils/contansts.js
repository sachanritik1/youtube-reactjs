const GOOGLE_API_KEY = "AIzaSyDLw42dGyFznfwr5cXb5h7DCVuDXemM14I";

const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`;

export { YOUTUBE_VIDEO_API };

# Bumper a video

[![badge](https://img.shields.io/twitter/follow/api_video?style=social)](https://twitter.com/intent/follow?screen_name=api_video)

[![badge](https://img.shields.io/github/stars/apivideo/bumperavideo?style=social)](https://github.com/apivideo/bumperavideo)

[![badge](https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video)](https://community.api.video)

![](https://github.com/apivideo/API_OAS_file/blob/master/apivideo_banner.png)

<h1 align="center">api.video secure a video</h1>

[api.video](https://api.video) is the video infrastructure for product builders. Lightning fast video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in your app.


## Secure a video

Secure a video is NodeJS application that uses the api.video NodeJs API client.  It makes one request to the API to retrieve a private video URL (these are unique, and can only be used once)

```
	const client = new apiVideo.Client({ apiKey: apiVideoKey });
	let videoId = "vitkytkieTnEvUjKE0VQpd2";
	let privateVideo = client.videos.get(videoId);
```

We extract the playerURL from the JSOn response, and render it on the webpage:

```
var playerUrl= (pvtVideo.assets.iframe);
console.log("playerUrl",(playerUrl));
var player = {"playerUrl": playerUrl};
return res.render('index', player);
```

The video will play, but if the user clicks the link to watch it in a new tab - the video will not play.
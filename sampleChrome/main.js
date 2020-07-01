document.addEventListener("DOMContentLoaded", function(event) {

const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();
const castOptions = new cast.framework.CastReceiverOptions();

let playbackConfig = (Object.assign(new cast.framework.PlaybackConfig(), playerManager.getPlaybackConfig()));

playerManager.setMessageInterceptor(
cast.framework.messages.MessageType.LOAD,
request => {

// Set cookies here.
// No need to pass cookies into header in each segment.

//  console.log("content id:", request.media.contentId);
//  Set your segment valid hls format : below is example:
//  Refer other format:
//  https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.HlsSegmentFormat

request.media.hlsSegmentFormat = cast.framework.messages.HlsSegmentFormat.TS;
return request;
});

cast.framework.CastReceiverContext.getInstance().setLoggerLevel(cast.framework.LoggerLevel.DEBUG);


playbackConfig.manifestRequestHandler = requestInfo => {
  //requestInfo.withCredentials = true;
};

playbackConfig.segmentRequestHandler = requestInfo => {
  //requestInfo.withCredentials = true;
};

playbackConfig.licenseRequestHandler = requestInfo => {
  //requestInfo.withCredentials = true;
};

castOptions.playbackConfig = playbackConfig;
context.start(castOptions);

});

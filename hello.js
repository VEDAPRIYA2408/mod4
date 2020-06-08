(function (window){
	var hellospeaker={};
	hellospeaker.name="VEDA";
	var speakword="Hello";
	hellospeaker.sayhello=function speak (name) {
		console.log(speakword + " " +hellospeaker.name);
	}
      window.hellospeaker=hellospeaker;
})(window);
hellospeaker.sayhello();

(function (window) {
	var byespeaker={};
	byespeaker.name="JOHN";
	var speakword="Good Bye";
	byespeaker.saybye= function speak(name) {
		console.log(speakword + " " + byespeaker.name);
	}
	window.byespeaker=byespeaker;
}) (window);
byespeaker.saybye();
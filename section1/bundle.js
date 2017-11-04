"use strict";

var myObject = function () {
	var leadself = 'Me: ',
	    leadcomputer = "PC: ",
	    aSaid = ["This is a Cyber Chat"],
	    msgYes = "Yes, that's a great idea.",
	    msgNo = "No, that must be a mistake.",
	    aSassyStuff = ["Like mold on books, grow myths on history.", "She moved like a poem and smiled like a sphinx.", "As long as we don’t die, this is gonna be one hell of a story.", "She laughed, and the desert sang.", "You’ve got about as much charm as a dead slug."];

	function echo(msg) {
		var output = '';

		aSaid.push("<div>" + msg + "</div>");
		var start = Math.max(aSaid.length - 6, 0);

		for (var i = start; i < aSaid.length; i++) {
			output += aSaid[i];
		}

		$('.advert').html(output);
		$('#talk span').text(msg);
	}

	function talk(msg) {
		echo(leadself + msg);
	}

	function saySassyStuff() {
		var msgIndex = Math.floor(Math.random() * aSassyStuff.length);
		echo(leadcomputer + aSassyStuff[msgIndex]);
	}

	function replayYesNo() {
		var msg = Math.random() > .5 ? msgYes : msgNo;
		echo(leadcomputer + msg);
	}

	return {
		talk: talk,
		saySassyStuff: saySassyStuff,
		replayYesNo: replayYesNo
	};
}();

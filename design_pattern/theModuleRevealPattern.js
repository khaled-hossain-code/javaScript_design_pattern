const myObject = (function () {
  const _leadself = 'Me: ',
    _leadcomputer = "PC: ",
    _aSaid = ["This is a Cyber Chat"],
    _msgYes = "Yes, that's a great idea.",
    _msgNo = "No, that must be a mistake.",
    _aSassyStuff = ["Like mold on books, grow myths on history.",
      "She moved like a poem and smiled like a sphinx.",
      "As long as we don’t die, this is gonna be one hell of a story.",
      "She laughed, and the desert sang.",
      "You’ve got about as much charm as a dead slug."];

  function _echo(msg) {
    let output = '';

    _aSaid.push("<div>" + msg + "</div>");
    const start = Math.max(_aSaid.length - 6, 0);

    for (let i = start; i < _aSaid.length; i++) {
      output += _aSaid[i];
    }

    $('.advert').html(output);
    $('#talk span').text(msg);
  }

  function talk(msg) {
    _echo(_leadself + msg);
  }
  
  function saySassyStuff() {
    const msgIndex = Math.floor(Math.random() * _aSassyStuff.length);
    _echo(_leadcomputer + _aSassyStuff[msgIndex]);
  }
  
  function replayYesNo() {
    const msg = Math.random() > .5 ? _msgYes : _msgNo;
    _echo(_leadcomputer + msg);
  }
  
  return {
    talk,
    saySassyStuff,
    replayYesNo
  }
})();
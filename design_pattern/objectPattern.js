const myObject = {
  leadself : 'Me: ',
  leadcomputer : "PC: ",
  aSaid : ["This is a Cyber Chat"],
  msgYes : "Yes, that's a great idea.",
  msgNo : "No, that must be a mistake.",
  aSassyStuff : ["Like mold on books, grow myths on history.",
  "She moved like a poem and smiled like a sphinx.",
  "As long as we don’t die, this is gonna be one hell of a story.",
  "She laughed, and the desert sang.",
  "You’ve got about as much charm as a dead slug."],
  
  talk(msg) {
    this.echo(this.leadself + this.msg);
  },
  
  saySassyStuff() {
    const msgIndex = Math.floor(Math.random() * this.aSassyStuff.length);
    this.echo(this.leadcomputer + this.aSassyStuff[msgIndex]);
  },

  replayYesNo() {
    const msg = Math.random() > .5 ? this.msgYes : this.msgNo;
    this.echo(this.leadcomputer + msg);
  },
  
  echo(msg) {
    let output = '';
    
    this.aSaid.push("<div>" + msg + "</div>");
    const start = Math.max(this.aSaid.length - 6, 0);
    
    for (let i = start; i < this.aSaid.length; i++) {
      output += this.aSaid[i];
    }
    
    $('.advert').html(output);
    $('#talk span').text(msg);
  }
}